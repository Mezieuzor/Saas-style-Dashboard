import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentStats } from "@/components/dashboard/analytics/payment-stats"
import { TaskTimeline } from "@/components/dashboard/analytics/task-timeline"
import { ProjectCards } from "@/components/dashboard/analytics/project-cards"
import { OverviewChart } from "@/components/dashboard/charts/overview-chart"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="Subscriptions"
            value="+2350"
            change="+180.1% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Sales"
            value="+12,234"
            change="+19% from last month"
            changeType="positive"
            icon={CreditCard}
          />
          <StatsCard
            title="Active Now"
            value="+573"
            change="+201 since last hour"
            changeType="positive"
            icon={Activity}
          />
        </div>

        {/* Payment Stats */}
        <PaymentStats />

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <OverviewChart />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
                  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
                  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
                  { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
                  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
                ].map((sale, index) => (
                  <div key={index} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{sale.name}</p>
                      <p className="text-sm text-muted-foreground">{sale.email}</p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline and Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          <TaskTimeline />
          <ProjectCards />
        </div>
      </div>
    </DashboardLayout>
  )
}
