"use client";
// CLIENT COMPONENT: 카드 클릭으로 상세 정보를 펼치고 접는 useState와 이벤트 핸들러를 사용합니다.

import { useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { Category, Project, Status } from "@/app/dashboard/_lib/types";
import {
  badgeRow,
  cardTopline,
  categoryBadge,
  expandContent,
  metaLine,
  progressBar,
  progressFill,
  progressValue,
  projectCard,
  projectCardExpanded,
  projectDescription,
  projectName,
  starCount,
  statusBadge,
  teamChip,
  teamList,
} from "@/app/dashboard/dashboard.css";

const categoryLabels: Record<Category, string> = {
  frontend: "프론트엔드",
  backend: "백엔드",
  mobile: "모바일",
  devops: "데브옵스",
};

const statusLabels: Record<Status, string> = {
  active: "진행 중",
  completed: "완료",
  paused: "대기",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(project.createdAt));

  return (
    <button
      className={`${projectCard} ${isExpanded ? projectCardExpanded : ""}`}
      type="button"
      aria-expanded={isExpanded}
      onClick={() => setIsExpanded((current) => !current)}
    >
      <div className={cardTopline}>
        <span className={starCount}>★ {project.stars.toLocaleString("ko-KR")}</span>
        <span>{isExpanded ? "접기 −" : "펼치기 +"}</span>
      </div>

      <div>
        <h2 className={projectName}>{project.name}</h2>
        <p className={projectDescription}>{project.description}</p>
      </div>

      <div className={badgeRow}>
        <span className={categoryBadge}>{categoryLabels[project.category]}</span>
        <span className={statusBadge}>{statusLabels[project.status]}</span>
      </div>

      <div>
        <div className={metaLine}>
          <span>진행도</span>
          <strong>{project.progress}%</strong>
        </div>
        <div className={progressBar} aria-label={`진행도 ${project.progress}%`}>
          <div
            className={progressFill}
            style={assignInlineVars({ [progressValue]: `${project.progress}%` })}
          />
        </div>
      </div>

      <div className={metaLine}>
        <span>생성일 {formattedDate}</span>
        <span>인원 {project.team.length}명</span>
      </div>

      {isExpanded ? (
        <div className={expandContent}>
          <strong>팀 구성</strong>
          <div className={teamList}>
            {project.team.map((member) => (
              <span className={teamChip} key={member}>
                {member}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </button>
  );
}
