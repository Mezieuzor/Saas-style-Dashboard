import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonutChart } from "../charts/donut-chart"

export function PaymentStats() {
  const paymentsData = [
    { name: "Today", value: 3267, color: "hsl(var(--chart-1))" },
    { name: "This Month", value: 8091, color: "hsl(var(--chart-2))" },
  ]

  const tasksData = [
    { name: "Pending", value: 23, color: "hsl(var(--chart-3))" },
    { name: "Completed", value: 54, color: "hsl(var(--chart-1))" },
  ]

  const projectsData = [
    { name: "Pending", value: 14, color: "hsl(var(--chart-3))" },
    { name: "Defined", value: 24, color: "hsl(var(--chart-2))" },
    { name: "Completed", value: 2, color: "hsl(var(--chart-1))" },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                <span className="text-sm">Today</span>
              </div>
              <span className="font-semibold">$3,267</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                <span className="text-sm">This Month</span>
              </div>
              <span className="font-semibold">$8,091</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">All Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <DonutChart
            data={tasksData}
            centerText={{
              value: "77",
              label: "Total",
            }}
          />
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                <span>Pending</span>
              </div>
              <span>23</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                <span>Completed</span>
              </div>
              <span>54</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <DonutChart
            data={projectsData}
            centerText={{
              value: "40",
              label: "Total",
            }}
          />
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                <span>Pending</span>
              </div>
              <span>14</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                <span>Defined</span>
              </div>
              <span>24</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                <span>Completed</span>
              </div>
              <span>2</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
