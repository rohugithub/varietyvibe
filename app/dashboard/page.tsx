import { DashboardStats } from  "@/components/dashboard-stats"
import { DashboardOverview } from  "@/components/dashboard-overview"
import { RecentProducts } from "@/components/recent-products"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview Chart */}
        <div className="lg:col-span-2">
          <DashboardOverview />
        </div>

        {/* Recent Products */}
        <div className="lg:col-span-1">
          <RecentProducts />
        </div>
      </div>
    </div>
  )
}
