import { fetchDashboardData } from "./_lib/data";
import { ClientExplorer } from "./_components/client/ClientExplorer";
import { AnimatedCounter } from "./_components/client/AnimatedCounter";
import { ThemeToggle } from "./_components/client/ThemeToggle";
import { PageHeader } from "./_components/server/PageHeader";
import { StatCard } from "./_components/server/StatCard";
import { dashboardContainer, statRail, statsGrid } from "./dashboard.css";

// SERVER COMPONENT: "use client" 지시어가 없습니다.
// 이 컴포넌트는 서버에서 실행됩니다.
// - 데이터 fetching은 서버에서 수행되어 브라우저 JS 번들에 포함되지 않습니다.
// - 정적 서버 컴포넌트는 HTML로 렌더링됩니다.
// - 직렬화 가능한 데이터만 props로 클라이언트 컴포넌트에 전달합니다.
export default async function DashboardPage() {
  // 데이터 흐름: Server(fetchDashboardData) → 직렬화 가능한 props → ClientExplorer/AnimatedCounter/ThemeToggle
  // 클라이언트는 이미 받은 데이터로 검색·필터·정렬만 수행합니다.
  const data = await fetchDashboardData();

  return (
    <main className={dashboardContainer}>
      {/* SERVER: 정적 헤더 - JS 번들에 포함되지 않음 */}
      <PageHeader
        title="데이터 익스플로러"
        subtitle="서버/클라이언트 컴포넌트 아키텍처 데모"
      />

      {/* CLIENT: 브라우저 document에 접근해 테마 속성을 바꾸므로 클라이언트 */}
      <ThemeToggle />

      <section className={statRail} aria-label="대시보드 통계">
        {/* SERVER + CLIENT 컴포지션 패턴: StatCard는 서버, AnimatedCounter는 클라이언트 자식 */}
        <div className={statsGrid}>
          <StatCard label="총 프로젝트" value={data.stats.totalProjects} />
          <StatCard label="활성 프로젝트" value={data.stats.activeProjects} />
          <StatCard label="완료된 프로젝트" value={data.stats.completedProjects} />
          <StatCard
            label="총 스타"
            value={data.stats.totalStars}
            animation={<AnimatedCounter target={data.stats.totalStars} />}
          />
          <StatCard label="참여 인원" value={data.stats.totalTeamMembers} />
        </div>
      </section>

      {/* CLIENT: 서버에서 패치한 프로젝트 데이터를 props로 전달받아 상호작용 처리 */}
      <ClientExplorer projects={data.projects} categories={data.categories} />
    </main>
  );
}
