"use client";

import { useEffect, useRef } from "react";

type AnimatedHeroNameProps = {
  firstName?: string;
  lastName?: string;
};

type Pixel = { x: number; y: number; size: number; hit: boolean };
type Ball = { x: number; y: number; dx: number; dy: number; radius: number };

export default function AnimatedHeroName({
  firstName = "Triumph",
  lastName = "Anya-Nga",
}: AnimatedHeroNameProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const offscreen = document.createElement("canvas");
    const off = offscreen.getContext("2d");
    if (!off) return;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = wrap.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      offscreen.width = w;
      offscreen.height = h;
      off.clearRect(0, 0, w, h);

      const cs = window.getComputedStyle(wrap);
      const font = `${cs.fontStyle} ${cs.fontVariant} ${cs.fontWeight} ${cs.fontSize}/${cs.lineHeight} ${cs.fontFamily}`;
      off.font = font;
      off.textBaseline = "top";

      const color = cs.color || "#0f172a";
      off.fillStyle = color;

      const firstEl = wrap.querySelector<HTMLSpanElement>("[data-hero-line='first']");
      const lastEl = wrap.querySelector<HTMLSpanElement>("[data-hero-line='last']");
      const firstRect = firstEl?.getBoundingClientRect();
      const lastRect = lastEl?.getBoundingClientRect();

      const startX = 0;
      const firstY = firstRect ? Math.max(0, firstRect.top - rect.top) : 0;
      const lastY = lastRect ? Math.max(0, lastRect.top - rect.top) : Math.round(h * 0.55);

      off.fillText(firstName, startX, firstY);
      off.fillText(lastName, startX, lastY);

      const img = off.getImageData(0, 0, w, h).data;
      pixelsRef.current = [];

      const step = Math.max(5, Math.round(parseFloat(cs.fontSize) / 9));
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const idx = (y * w + x) * 4 + 3;
          const a = img[idx];
          // Ignore anti-aliased fringe pixels so dots don't look glued to letter edges.
          if (a > 170) {
            pixelsRef.current.push({
              x,
              y,
              size: Math.max(2, step * 0.62),
              hit: false,
            });
          }
        }
      }

      // Faster ball movement = faster pixel hits + color changes.
      const speed = Math.max(2.4, step * 0.42);
      ballRef.current = {
        x: w * 0.85,
        y: h * 0.25,
        dx: -speed,
        dy: speed * 0.9,
        radius: Math.max(2.5, step * 0.55),
      };
    };

    const update = (w: number, h: number) => {
      const ball = ballRef.current;
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= w) ball.dx *= -1;
      if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= h) ball.dy *= -1;

      // Allow a few hits per frame so faster motion doesn't "skip" pixels.
      let hitsThisFrame = 0;
      const maxHitsPerFrame = 3;
      for (const p of pixelsRef.current) {
        if (p.hit) continue;
        const hit =
          ball.x + ball.radius > p.x &&
          ball.x - ball.radius < p.x + p.size &&
          ball.y + ball.radius > p.y &&
          ball.y - ball.radius < p.y + p.size;
        if (!hit) continue;

        p.hit = true;
        hitsThisFrame += 1;

        const cx = p.x + p.size / 2;
        const cy = p.y + p.size / 2;
        if (Math.abs(ball.x - cx) > Math.abs(ball.y - cy)) ball.dx *= -1;
        else ball.dy *= -1;

        if (hitsThisFrame >= maxHitsPerFrame) break;
      }
    };

    const draw = (w: number, h: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 0.14;

      for (const p of pixelsRef.current) {
        ctx.fillStyle = p.hit ? "#94a3b8" : "#0f172a";
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      ctx.globalAlpha = 0.2;
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
    };

    const loop = () => {
      const rect = wrap.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      update(w, h);
      draw(w, h);
      rafRef.current = requestAnimationFrame(loop);
    };

    setup();
    loop();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [firstName, lastName]);

  return (
    <span ref={wrapRef} className="relative inline-flex flex-col tracking-tight align-baseline">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <span data-hero-line="first" className="block leading-[0.9]">
        {firstName}
      </span>
      <span data-hero-line="last" className="block leading-[0.9]">
        {lastName}
      </span>
    </span>
  );
}

