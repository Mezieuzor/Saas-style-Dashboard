import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { UserProfile } from "@/components/dashboard/user/user-profile"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and account settings.</p>
        </div>
        <UserProfile />
      </div>
    </DashboardLayout>
  )
}
