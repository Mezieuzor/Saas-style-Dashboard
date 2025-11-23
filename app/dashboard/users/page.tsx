import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { UserList } from "@/components/dashboard/user/user-list"

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">Manage team members and user permissions.</p>
        </div>
        <UserList />
      </div>
    </DashboardLayout>
  )
}
