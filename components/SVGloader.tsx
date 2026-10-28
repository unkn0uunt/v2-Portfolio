"use client";
import React, { useEffect, useRef } from "react";

const SVGLoader = () => {
  const loader = useRef<HTMLDivElement | null>(null);
  const path = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const initialCurve = 200;
    const duration = 600;
    let start: number | undefined;
    let frameId: number;

    const easeOutQuad = (time: number, from: number, change: number) =>
      -change * (time / duration) * (time / duration - 2) + from;

    const loaderHeight = () => loader.current?.getBoundingClientRect().height ?? 0;

    const setPath = (curve: number) => {
      const width = window.innerWidth;
      const height = loaderHeight();
      path.current?.setAttributeNS(
        null,
        "d",
        `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 2} ${height - curve} 0 ${height}
      L0 0`
      );
    };

    const animate = (timestamp: number) => {
      start ??= timestamp;
      const elapsed = timestamp - start;
      setPath(easeOutQuad(elapsed, initialCurve, -200));

      if (loader.current) {
        loader.current.style.top =
          easeOutQuad(elapsed, 0, -loaderHeight()) + "px";
      }

      if (elapsed < duration) frameId = requestAnimationFrame(animate);
    };

    setPath(initialCurve);
    const timerId = window.setTimeout(() => {
      frameId = requestAnimationFrame(animate);
    }, 500);

    return () => {
      window.clearTimeout(timerId);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={loader} className={`w-full z-50 fixed h-[calc(100vh+200px)]`}>
      <svg className="h-full w-full">
        <path
          className="stroke-[1px] stroke-black fill-slate-800 "
          ref={path}
        ></path>
      </svg>
    </div>
  );
};

export default SVGLoader;
