import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { UserSettings } from "@/components/dashboard/user/user-settings"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and security settings.</p>
        </div>
        <UserSettings />
      </div>
    </DashboardLayout>
  )
}
