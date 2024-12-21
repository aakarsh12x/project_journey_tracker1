import { useState } from "react";
import { Project } from "@/types/project";

const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Develop a full-featured e-commerce platform with shopping cart and payment integration",
    status: "pending",
    progress: 0,
    dueDate: "2024-04-01",
    score: 0,
  },
  {
    id: "2",
    title: "Mobile App UI",
    description: "Design and implement the user interface for a mobile fitness tracking application",
    status: "accepted",
    progress: 45,
    dueDate: "2024-03-15",
    score: 45,
  },
  {
    id: "3",
    title: "API Integration",
    description: "Integrate third-party APIs for weather data and implement caching mechanism",
    status: "pending",
    progress: 0,
    dueDate: "2024-03-30",
    score: 0,
  },
];

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const acceptProject = (id: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, status: "accepted" as const } : project
      )
    );
  };

  const declineProject = (id: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, status: "declined" as const } : project
      )
    );
  };

  return {
    projects,
    acceptProject,
    declineProject,
  };
};