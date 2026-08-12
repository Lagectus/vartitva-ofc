"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let animFrameId: number;

    import("lenis").then((LenisModule) => {
      const LenisClass = LenisModule.default || LenisModule;
      lenisInstance = new LenisClass({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time);
          animFrameId = requestAnimationFrame(raf);
        }
      }

      animFrameId = requestAnimationFrame(raf);
    });

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, []);

  return <>{children}</>;
}
