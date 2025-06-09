import type React from "react"
import { DashboardSidebar } from  "@/components/dashboard-sidebar"
import { DashboardHeader } from   "@/components/dashboard-header"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="ml-64">
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
