"use client";

import { useEffect, useRef } from "react";

export function useParallax(speed = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    function onScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // How far through the viewport the element is (0 = bottom edge, 1 = top edge)
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const offset = (progress - 0.5) * rect.height * speed;
      el.style.setProperty("--parallax-y", `${offset}px`);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
