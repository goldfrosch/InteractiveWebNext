"use client";

import { useEffect, useRef, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  homeBlock,
  logoItem,
  percentOpacity,
  percentTop,
  percentLeft,
  percentRotate,
} from "./page.css";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const numSteps = 40;
    const thresholds: number[] = [];
    for (let i = 1; i <= numSteps; i++) {
      thresholds.push(i / numSteps);
    }
    thresholds.push(0);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setPercent(entry.intersectionRatio);
      },
      { root: null, rootMargin: "0px", threshold: thresholds },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={homeBlock}>
      <div className="empty" />
      <div className="page" ref={targetRef}>
        <div
          className={logoItem}
          style={assignInlineVars({
            [percentOpacity]: `${percent * 100}%`,
            [percentTop]: `${percent * 50}%`,
            [percentLeft]: `${percent * 50}%`,
            [percentRotate]: `${percent * 360}deg`,
          })}
        >
          <span style={{ opacity: percent }}>예시용 글씨지롱</span>
        </div>
      </div>
      <div className="empty" />
    </div>
  );
}
