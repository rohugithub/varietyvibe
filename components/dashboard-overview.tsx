"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const monthlyData = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0 },
  { month: "Mar", revenue: 0 },
  { month: "Apr", revenue: 0 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 0 },
  { month: "Jul", revenue: 0 },
  { month: "Aug", revenue: 0 },
  { month: "Sep", revenue: 75000 },
  { month: "Oct", revenue: 0 },
  { month: "Nov", revenue: 0 },
  { month: "Dec", revenue: 0 },
]

export function DashboardOverview() {
  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-80">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>₹100000</span>
            <span>₹75000</span>
            <span>₹50000</span>
            <span>₹25000</span>
            <span>₹0</span>
          </div>

          {/* Chart area */}
          <div className="ml-12 h-full flex items-end justify-between space-x-2">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center flex-1">
                <div className="w-full flex justify-center mb-2">
                  <div
                    className={`w-8 rounded-t ${
                      data.revenue > 0 ? (index === 4 ? "bg-black" : "bg-gray-400") : "bg-gray-200"
                    }`}
                    style={{
                      height: data.revenue > 0 ? `${(data.revenue / maxRevenue) * 200}px` : "4px",
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>

          {/* Tooltip for September */}
          <div className="absolute top-16 right-20 bg-gray-800 text-white p-2 rounded text-xs">
            <div>Month: Sep</div>
            <div>Revenue: ₹ 0.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
