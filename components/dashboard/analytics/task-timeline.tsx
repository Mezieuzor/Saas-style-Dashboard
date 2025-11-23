import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertCircle, CheckCircle } from "lucide-react"

export function TaskTimeline() {
  const tasks = [
    {
      id: 1,
      title: "Use the vertical PCI matrix, then you can generate the mobile application!",
      status: "active",
      priority: "high",
      time: "Fri Aug 05 2022 06:51 GMT+0800",
      assignee: "Philippine Standard Time",
    },
    {
      id: 2,
      title: "Try to copy the cross-platform RAM firewall, that should capacitor the SDD circuit!",
      status: "pending",
      priority: "medium",
      time: "Sat Mar 21 2022 08:26:35 GMT+0800",
      assignee: "Philippine Standard Time",
    },
    {
      id: 3,
      title: "Multi-layered client-server knowledge base",
      status: "warning",
      priority: "medium",
      time: "Tue Apr 04 2022 06:11:10 GMT+0800",
      assignee: "Philippine Standard Time",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      pending: "secondary",
      warning: "destructive",
    } as const

    return <Badge variant={variants[status as keyof typeof variants] || "secondary"}>{status}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-4 p-4 border rounded-lg">
              {getStatusIcon(task.status)}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium leading-relaxed">{task.title}</h4>
                  {getStatusBadge(task.status)}
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>{task.time}</p>
                  <p>({task.assignee})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
