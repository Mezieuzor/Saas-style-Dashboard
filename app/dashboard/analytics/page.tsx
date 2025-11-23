import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SimpleBarChart } from "@/components/dashboard/charts/bar-chart"
import { DonutChart } from "@/components/dashboard/charts/donut-chart"
import { OverviewChart } from "@/components/dashboard/charts/overview-chart"

export default function AnalyticsPage() {
  const pageViewsData = [
    { name: "Mon", value: 2400 },
    { name: "Tue", value: 1398 },
    { name: "Wed", value: 9800 },
    { name: "Thu", value: 3908 },
    { name: "Fri", value: 4800 },
    { name: "Sat", value: 3800 },
    { name: "Sun", value: 4300 },
  ]

  const trafficSourceData = [
    { name: "Direct", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Social", value: 25, color: "hsl(var(--chart-2))" },
    { name: "Search", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Email", value: 10, color: "hsl(var(--chart-4))" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Detailed analytics and insights for your business.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Views</CardTitle>
              <CardDescription>Total page views this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234,567</div>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unique Visitors</CardTitle>
              <CardDescription>Unique visitors this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89,432</div>
              <p className="text-xs text-green-600">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bounce Rate</CardTitle>
              <CardDescription>Average bounce rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5%</div>
              <p className="text-xs text-red-600">+2.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Duration</CardTitle>
              <CardDescription>Average session duration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3m 24s</div>
              <p className="text-xs text-green-600">+15s from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue over time</CardDescription>
            </CardHeader>
            <CardContent>
              <OverviewChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent>
              <DonutChart data={trafficSourceData} />
              <div className="mt-4 grid grid-cols-2 gap-4">
                {trafficSourceData.map((source) => (
                  <div key={source.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                    <span className="text-sm">{source.name}</span>
                    <span className="text-sm font-medium ml-auto">{source.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Page Views</CardTitle>
            <CardDescription>Page views for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={pageViewsData} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
