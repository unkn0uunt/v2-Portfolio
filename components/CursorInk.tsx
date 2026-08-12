"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const SIM = `
precision highp float;

uniform sampler2D u_prev;
uniform vec2 u_simRes;
uniform vec2 u_a;
uniform vec2 u_b;
uniform float u_radius;
uniform float u_strength;
uniform float u_decay;

float distToSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float len2 = dot(ab, ab);
  float t = len2 > 0.0 ? clamp(dot(p - a, ab) / len2, 0.0, 1.0) : 0.0;
  return distance(p, a + ab * t);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_simRes;
  float e = texture2D(u_prev, uv).r;
  e = e * u_decay - 0.0025;
  float d = distToSegment(gl_FragCoord.xy, u_a, u_b) / u_radius;
  e += exp(-d * d * 2.0) * u_strength;
  gl_FragColor = vec4(clamp(e, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`;

const DISPLAY = `
precision highp float;

uniform sampler2D u_energy;
uniform vec2 u_res;
uniform float u_time;
uniform float u_dpr;
uniform vec4 u_ripples[4];

const vec3 INK_SOFT = vec3(0.18, 0.22, 0.30);
const vec3 INK_CORE = vec3(0.06, 0.09, 0.16);

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.55;
  for (int i = 0; i < 3; i++) {
    v += amp * vnoise(p);
    p = p * 2.1 + vec2(17.3, 9.1);
    amp *= 0.5;
  }
  return v;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  float t = u_time;

  vec2 uv = frag / (620.0 * u_dpr);
  vec2 warp = vec2(
    fbm(uv * 1.6 + vec2(t * 0.04, 0.0)),
    fbm(uv * 1.6 + vec2(4.7, t * 0.03))
  );
  float n = fbm(uv * 2.2 + warp * 0.9 + vec2(t * 0.02, -t * 0.015));
  float silk = smoothstep(0.34, 0.82, n);

  float energy = max(0.0, texture2D(u_energy, frag / u_res).r - 0.045) * 1.05;
  float field = energy * (0.45 + 0.55 * silk);

  float wave = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 r = u_ripples[i];
    if (r.w < 0.5) continue;
    float age = t - r.z;
    float life = 2.2;
    if (age < 0.0 || age > life) continue;
    float p = age / life;
    float easeOut = 1.0 - pow(1.0 - p, 3.0);
    float rad = easeOut * 430.0 * u_dpr;
    float d = distance(frag, r.xy);
    float bandW = (70.0 + 60.0 * p) * u_dpr;
    float q = (d - rad) / bandW;
    wave += exp(-q * q) * pow(1.0 - p, 2.0);
  }
  wave = wave * (0.5 + 0.5 * silk);

  float lum = field + wave * 0.85;
  float alpha = clamp(field * 0.26 + wave * 0.24, 0.0, 0.42);

  float ramp = clamp(lum * 1.35, 0.0, 1.0);
  vec3 col = mix(INK_SOFT, INK_CORE, smoothstep(0.08, 0.9, ramp));

  float dith = (hash(frag + fract(t)) - 0.5) / 255.0;
  col += dith;
  alpha = max(alpha + dith, 0.0);

  gl_FragColor = vec4(col * alpha, alpha);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function program(gl: WebGLRenderingContext, fragSrc: string) {
  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prog));
    return null;
  }
  return prog;
}

const REDUCE = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMotionOk() {
  return !window.matchMedia(REDUCE).matches;
}

/**
 * Soft dark ink trail that follows the pointer (reference-site style, ink palette).
 */
export default function CursorInk() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const motionOk = useSyncExternalStore(subscribeReduced, getMotionOk, () => false);

  useEffect(() => {
    if (!motionOk) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
    });
    if (!gl) return;

    const simProg = program(gl, SIM);
    const dispProg = program(gl, DISPLAY);
    if (!simProg || !dispProg) return;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    for (const prog of [simProg, dispProg]) {
      const loc = gl.getAttribLocation(prog, "a_pos");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    const simU = {
      prev: gl.getUniformLocation(simProg, "u_prev"),
      simRes: gl.getUniformLocation(simProg, "u_simRes"),
      a: gl.getUniformLocation(simProg, "u_a"),
      b: gl.getUniformLocation(simProg, "u_b"),
      radius: gl.getUniformLocation(simProg, "u_radius"),
      strength: gl.getUniformLocation(simProg, "u_strength"),
      decay: gl.getUniformLocation(simProg, "u_decay"),
    };
    const dispU = {
      energy: gl.getUniformLocation(dispProg, "u_energy"),
      res: gl.getUniformLocation(dispProg, "u_res"),
      time: gl.getUniformLocation(dispProg, "u_time"),
      dpr: gl.getUniformLocation(dispProg, "u_dpr"),
      ripples: gl.getUniformLocation(dispProg, "u_ripples"),
    };

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let simW = 0;
    let simH = 0;
    let ping: { tex: WebGLTexture; fbo: WebGLFramebuffer }[] = [];
    let pingIdx = 0;

    const makeTarget = (w: number, h: number) => {
      const tex = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        w,
        h,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null
      );
      const fbo = gl.createFramebuffer()!;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        tex,
        0
      );
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return { tex, fbo };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = parent;
      canvas.width = Math.round(clientWidth * dpr);
      canvas.height = Math.round(clientHeight * dpr);
      simW = Math.max(1, Math.round(0.25 * canvas.width));
      simH = Math.max(1, Math.round(0.25 * canvas.height));
      for (const t of ping) {
        gl.deleteTexture(t.tex);
        gl.deleteFramebuffer(t.fbo);
      }
      ping = [makeTarget(simW, simH), makeTarget(simW, simH)];
      pingIdx = 0;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    let cur = { x: -9999, y: -9999 };
    let prev = { x: -9999, y: -9999 };
    let pathLen = 0;
    let inside = false;
    let lastMove = 0;
    let boostUntil = 0;
    const ripples = new Float32Array(16);
    let rippleIdx = 0;
    const t0 = performance.now();
    const nowSec = () => (performance.now() - t0) / 1000;

    const toLocal = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: rect.height - (e.clientY - rect.top),
        inside:
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom,
      };
    };

    const onMove = (e: PointerEvent) => {
      const p = toLocal(e);
      if (!p.inside) {
        inside = false;
        return;
      }
      const sx = p.x * dpr * 0.25;
      const sy = p.y * dpr * 0.25;
      if (!inside) {
        cur = { x: sx, y: sy };
        prev = { x: sx, y: sy };
        inside = true;
      }
      pathLen += Math.hypot(sx - cur.x, sy - cur.y);
      cur = { x: sx, y: sy };
      lastMove = performance.now();
    };

    const onDown = (e: PointerEvent) => {
      const p = toLocal(e);
      if (!p.inside) return;
      const i = 4 * rippleIdx;
      ripples[i] = p.x * dpr;
      ripples[i + 1] = p.y * dpr;
      ripples[i + 2] = nowSec();
      ripples[i + 3] = 1;
      rippleIdx = (rippleIdx + 1) % 4;
      boostUntil = performance.now() + 450;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    let raf = 0;
    let running = false;
    let visible = true;

    const frame = () => {
      if (!running) return;
      const strength =
        inside && pathLen > 0.05
          ? Math.min(0.35, 0.06 + pathLen / (18 * dpr * 1))
          : 0;
      pathLen = 0;
      const t = performance.now();
      let decay = 0.985;
      if (t < boostUntil) decay = 0.86;
      else if (t - lastMove > 150) decay = 0.94;

      const src = ping[pingIdx];
      const dst = ping[1 - pingIdx];

      gl.useProgram(simProg);
      gl.disable(gl.BLEND);
      gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fbo);
      gl.viewport(0, 0, simW, simH);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, src.tex);
      gl.uniform1i(simU.prev, 0);
      gl.uniform2f(simU.simRes, simW, simH);
      gl.uniform2f(simU.a, prev.x, prev.y);
      gl.uniform2f(simU.b, cur.x, cur.y);
      gl.uniform1f(simU.radius, 62 * dpr * 0.25);
      gl.uniform1f(simU.strength, strength);
      gl.uniform1f(simU.decay, decay);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      prev = { ...cur };

      gl.useProgram(dispProg);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, dst.tex);
      gl.uniform1i(dispU.energy, 0);
      gl.uniform2f(dispU.res, canvas.width, canvas.height);
      gl.uniform1f(dispU.time, nowSec());
      gl.uniform1f(dispU.dpr, dpr);
      gl.uniform4fv(dispU.ripples, ripples);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      pingIdx = 1 - pingIdx;
      raf = requestAnimationFrame(frame);
    };

    const setRunning = (on: boolean) => {
      if (on && !running) {
        running = true;
        raf = requestAnimationFrame(frame);
      } else if (!on && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      setRunning(visible && !document.hidden);
    });
    io.observe(canvas);

    const onVis = () => setRunning(visible && !document.hidden);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      setRunning(false);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVis);
      for (const t of ping) {
        gl.deleteTexture(t.tex);
        gl.deleteFramebuffer(t.fbo);
      }
    };
  }, [motionOk]);

  if (!motionOk) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] hidden md:block"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </div>
  );
}
