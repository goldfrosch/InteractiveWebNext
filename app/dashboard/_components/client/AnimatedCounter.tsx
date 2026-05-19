"use client";
// CLIENT COMPONENT: useEffect와 requestAnimationFrame을 사용해 브라우저에서 숫자 애니메이션을 실행합니다.

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

export function AnimatedCounter({ target, duration = 1500 }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, target]);

  return <>{value.toLocaleString("ko-KR")}</>;
}
