"use client";
// CLIENT COMPONENT: 입력 상태와 onChange 이벤트 핸들러를 사용하므로 클라이언트에서 실행됩니다.

import { useEffect, useState } from "react";
import { searchContainer, searchIcon, searchInput } from "@/app/dashboard/dashboard.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <label className={searchContainer}>
      <span className={searchIcon} aria-hidden="true" />
      <input
        className={searchInput}
        value={draft}
        onChange={(event) => {
          const nextValue = event.target.value;
          setDraft(nextValue);
          onChange(nextValue);
        }}
        placeholder="프로젝트명 또는 설명으로 검색"
        type="search"
      />
    </label>
  );
}
