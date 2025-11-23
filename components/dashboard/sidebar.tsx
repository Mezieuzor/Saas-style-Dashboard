"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { BarChart3, FolderOpen, Settings, Monitor, DollarSign, Package, FileText, Layers, CreditCard, Layout, Palette, PieChart, Table, Smartphone, User, Users } from 'lucide-react'

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Analytics", href: "/dashboard/analytics", icon: PieChart },
  { name: "Projects", href: "/dashboard/projects", icon: FolderOpen },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "System", href: "/dashboard/system", icon: Settings },
  { name: "Monitor", href: "/dashboard/monitor", icon: Monitor },
  { name: "Financial", href: "/dashboard/financial", icon: DollarSign },
  { name: "Stock", href: "/dashboard/stock", icon: Package },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Widgets", href: "/dashboard/widgets", icon: Layers },
  { name: "Cards", href: "/dashboard/cards", icon: CreditCard },
  { name: "Layouts", href: "/dashboard/layouts", icon: Layout },
  { name: "Interface", href: "/dashboard/interface", icon: Palette },
  { name: "Charts", href: "/dashboard/charts", icon: BarChart3 },
  { name: "Forms", href: "/dashboard/forms", icon: FileText },
  { name: "Tables", href: "/dashboard/tables", icon: Table },
  { name: "Apps", href: "/dashboard/apps", icon: Smartphone },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">SaaS Dashboard</h1>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
        <div className="h-10 w-10 rounded-full bg-sidebar-accent flex items-center justify-center">
          <span className="text-sm font-medium text-sidebar-accent-foreground">AD</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-sidebar-foreground truncate">Dashboard</p>
          <p className="text-xs text-sidebar-foreground/60">User</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User Actions */}
      <div className="p-4 border-t border-sidebar-border space-y-1">
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors w-full",
            pathname === "/dashboard/settings"
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
          )}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </div>
  )
}
