import { useToast } from "@/components/ui/use-toast";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/useProjects";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export const Dashboard = () => {
  const { toast } = useToast();
  const { projects, acceptProject, declineProject } = useProjects();

  const handleAccept = (id: string) => {
    acceptProject(id);
    toast({
      title: "Project Accepted",
      description: "You have successfully accepted the project.",
    });
  };

  const handleDecline = (id: string) => {
    declineProject(id);
    toast({
      title: "Project Declined",
      description: "You have declined the project.",
      variant: "destructive",
    });
  };

  const chartData = projects.map((project) => ({
    name: project.title,
    progress: project.progress,
  }));

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Project Dashboard</h1>
        <p className="text-muted-foreground">Manage your assigned projects and track progress</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress Overview</h2>
        <div className="bg-card p-4 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="progress" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))}
      </div>
    </div>
  );
};