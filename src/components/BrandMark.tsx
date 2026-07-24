"use client";

import { useEffect, useRef, useState } from "react";

export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  const [done, setDone] = useState(false);
  const lightRef = useRef<HTMLVideoElement>(null);
  const darkRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const video = isDark ? darkRef.current : lightRef.current;
    if (!video) {
      setDone(true);
      return;
    }

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setDone(true);
    };

    const tryPlay = () => {
      void video.play().catch(finish);
    };

    video.addEventListener("ended", finish);
    video.addEventListener("error", finish);

    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("loadeddata", tryPlay, { once: true });

    return () => {
      video.removeEventListener("ended", finish);
      video.removeEventListener("error", finish);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <span className={`${className}${done ? " is-static" : " is-animating"}`}>
      <span className="brand-mark__layer brand-mark__layer--light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="brand-mark__still"
          src="/projects/logo-black.svg"
          alt="martin.design"
          draggable={false}
        />
        <video
          ref={lightRef}
          className="brand-mark__video"
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/projects/logo-black.mp4" type="video/mp4" />
          <source src="/projects/logo-black.webm" type="video/webm" />
        </video>
      </span>
      <span className="brand-mark__layer brand-mark__layer--dark" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-mark__still" src="/projects/logo-white.svg" alt="" draggable={false} />
        <video
          ref={darkRef}
          className="brand-mark__video"
          muted
          playsInline
          preload="auto"
        >
          <source src="/projects/logo-white.mp4" type="video/mp4" />
          <source src="/projects/logo-white.webm" type="video/webm" />
        </video>
      </span>
    </span>
  );
}
