export interface Project {
  id: string;
  title: string;
  description: string;
  status: "pending" | "accepted" | "declined";
  progress: number;
  dueDate: string;
  score?: number;
}