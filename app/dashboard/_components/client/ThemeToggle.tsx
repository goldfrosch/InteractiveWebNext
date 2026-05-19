"use client";
// CLIENT COMPONENT: document.documentElement 속성과 클릭 이벤트를 사용하므로 클라이언트에서 실행됩니다.

import { useEffect, useState } from "react";
import { themeToggle } from "@/app/dashboard/dashboard.css";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <button className={themeToggle} type="button" onClick={() => setIsDark((current) => !current)}>
      {isDark ? "☀️ 라이트" : "🌙 다크"}
    </button>
  );
}
