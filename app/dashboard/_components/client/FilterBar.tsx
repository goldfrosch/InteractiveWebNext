"use client";
// CLIENT COMPONENT: 필터/정렬 버튼 이벤트 핸들러를 사용하므로 클라이언트에서 실행됩니다.

import type { Category, SortKey } from "@/app/dashboard/_lib/types";
import {
  filterBar,
  filterButton,
  filterButtonActive,
  filterGroup,
  resultCount,
  sortControl,
} from "@/app/dashboard/dashboard.css";

const categoryLabels: Record<Category | "all", string> = {
  all: "전체",
  frontend: "프론트엔드",
  backend: "백엔드",
  mobile: "모바일",
  devops: "데브옵스",
};

const sortLabels: Record<SortKey, string> = {
  name: "이름",
  stars: "스타",
  createdAt: "생성일",
  progress: "진행도",
};

interface FilterBarProps {
  categories: Category[];
  selectedCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
  sortBy: SortKey;
  onSortChange: (sortKey: SortKey) => void;
  isAscending: boolean;
  onToggleOrder: () => void;
  resultCount: number;
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  isAscending,
  onToggleOrder,
  resultCount: count,
}: FilterBarProps) {
  const categoryOptions: Array<Category | "all"> = ["all", ...categories];
  const sortOptions: SortKey[] = ["name", "stars", "createdAt", "progress"];

  return (
    <div className={filterBar}>
      <div className={filterGroup} aria-label="카테고리 필터">
        {categoryOptions.map((category) => (
          <button
            className={`${filterButton} ${selectedCategory === category ? filterButtonActive : ""}`}
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className={filterGroup} aria-label="정렬 기준">
        {sortOptions.map((sortKey) => (
          <button
            className={`${filterButton} ${sortBy === sortKey ? filterButtonActive : ""}`}
            key={sortKey}
            type="button"
            onClick={() => onSortChange(sortKey)}
          >
            {sortLabels[sortKey]}
          </button>
        ))}
        <button className={sortControl} type="button" onClick={onToggleOrder}>
          {isAscending ? "오름차순 ↑" : "내림차순 ↓"}
        </button>
      </div>

      <span className={resultCount}>결과 {count.toLocaleString("ko-KR")}개</span>
    </div>
  );
}
