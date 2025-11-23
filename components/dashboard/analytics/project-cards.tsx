import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ProjectCards() {
  const projects = [
    {
      name: "Handcrafted Granite Car",
      status: "active",
      progress: 13,
      tasks: { completed: 35, total: 6 },
    },
    {
      name: "Awesome Wooden Table",
      status: "completed",
      progress: 6,
      tasks: { completed: 87, total: 15 },
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{project.name}</h4>
                <Badge variant={project.status === "active" ? "default" : "secondary"}>{project.status}</Badge>
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{project.progress}%</span>
                <span>
                  {project.tasks.completed} / {project.tasks.total} Tasks
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
