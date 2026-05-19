"use client";
// CLIENT COMPONENT: useState/useMemo/이벤트 핸들러를 사용하므로 클라이언트에서 실행됩니다.
// 서버 컴포넌트가 fetch한 projects/categories를 props로 받아 브라우저에서 검색·필터·정렬합니다.
// 주의: 클라이언트 컴포넌트 내부에서 렌더링하는 자식도 모두 클라이언트 영역입니다.

import { useMemo, useState } from "react";
import type { Category, Project, SortKey } from "@/app/dashboard/_lib/types";
import { emptyState, explorerShell, projectGrid } from "@/app/dashboard/dashboard.css";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";
import { SearchInput } from "./SearchInput";

interface ClientExplorerProps {
  projects: Project[];
  categories: Category[];
}

export function ClientExplorer({ projects, categories }: ClientExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [sortBy, setSortBy] = useState<SortKey>("name");
  const [isAscending, setIsAscending] = useState(true);

  const filteredProjects = useMemo(() => {
    let result = [...projects];
    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch) {
      result = result.filter(
        (project) =>
          project.name.toLowerCase().includes(normalizedSearch) ||
          project.description.toLowerCase().includes(normalizedSearch),
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((project) => project.category === selectedCategory);
    }

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name, "ko-KR");
          break;
        case "stars":
          comparison = a.stars - b.stars;
          break;
        case "createdAt":
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case "progress":
          comparison = a.progress - b.progress;
          break;
      }

      return isAscending ? comparison : -comparison;
    });

    return result;
  }, [projects, search, selectedCategory, sortBy, isAscending]);

  return (
    <section className={explorerShell} aria-label="프로젝트 익스플로러">
      <SearchInput value={search} onChange={setSearch} />
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        isAscending={isAscending}
        onToggleOrder={() => setIsAscending((previous) => !previous)}
        resultCount={filteredProjects.length}
      />
      <div className={projectGrid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 ? <div className={emptyState}>조건에 맞는 프로젝트가 없습니다.</div> : null}
      </div>
    </section>
  );
}
