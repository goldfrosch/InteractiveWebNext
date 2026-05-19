import { headerBlock, headerKicker, headerSubtitle, headerTitle } from "@/app/dashboard/dashboard.css";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

// SERVER COMPONENT: "use client" 지시어가 없습니다.
// 이 컴포넌트는 서버에서만 실행되며, JS 번들에 포함되지 않습니다.
export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className={headerBlock}>
      <div className={headerKicker}>SERVER RENDERED / 정적 헤더</div>
      <h1 className={headerTitle}>{title}</h1>
      <p className={headerSubtitle}>{subtitle}</p>
    </header>
  );
}
