export type Category = "frontend" | "backend" | "mobile" | "devops";
export type Status = "active" | "completed" | "paused";
export type SortKey = "name" | "stars" | "createdAt" | "progress";

export interface Project {
  id: string;
  name: string;
  description: string;
  category: Category;
  status: Status;
  progress: number;
  team: string[];
  createdAt: string;
  stars: number;
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalStars: number;
  totalTeamMembers: number;
}

export interface DashboardData {
  projects: Project[];
  stats: DashboardStats;
  categories: Category[];
}
