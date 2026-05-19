import type { ReactNode } from "react";
import { statCard, statLabel, statValue } from "@/app/dashboard/dashboard.css";

interface StatCardProps {
  label: string;
  value: number;
  animation?: ReactNode;
}

// SERVER COMPONENT: "use client" 지시어가 없습니다.
// 이 컴포넌트는 서버에서만 실행되며, JS 번들에 포함되지 않습니다.
// animation prop으로 클라이언트 컴포넌트를 자식 슬롯에 끼워 넣는 컴포지션 패턴을 보여줍니다.
export function StatCard({ label, value, animation }: StatCardProps) {
  return (
    <article className={statCard}>
      <span className={statLabel}>{label}</span>
      <strong className={statValue}>{animation ?? value.toLocaleString("ko-KR")}</strong>
    </article>
  );
}
