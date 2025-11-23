import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    { name: "Website Redesign", status: "In Progress", progress: 75, dueDate: "2024-01-15" },
    { name: "Mobile App", status: "Planning", progress: 25, dueDate: "2024-02-28" },
    { name: "API Integration", status: "Completed", progress: 100, dueDate: "2023-12-20" },
    { name: "Database Migration", status: "In Progress", progress: 60, dueDate: "2024-01-30" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">Manage and track your project progress.</p>
        </div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <CardDescription>Due: {project.dueDate}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
