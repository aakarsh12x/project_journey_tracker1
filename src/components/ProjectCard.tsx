import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, XCircle } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
}

export const ProjectCard = ({ project, onAccept, onDecline }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="h-4 w-4" />
          <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
      </CardContent>
      {project.status === "pending" && (
        <CardFooter className="gap-2">
          <Button
            className="flex-1"
            onClick={() => onAccept(project.id)}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Accept
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onDecline(project.id)}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Decline
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};