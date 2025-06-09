import { Package, FolderOpen, Tag, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Products",
    value: "22",
    subtitle: "+0 new products this month",
    icon: Package,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Total Categories",
    value: "6",
    subtitle: "+0 new categories this month",
    icon: FolderOpen,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Total Brands",
    value: "6",
    subtitle: "+0 new brands this month",
    icon: Tag,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    title: "Total Variations",
    value: "26",
    subtitle: "+4 new variations this month",
    icon: Zap,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    title: "Total Users",
    value: "3",
    subtitle: "+3 new users this month",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} border-0`}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.subtitle}</p>
              </div>
              <div className={`p-2 rounded-lg bg-white ${stat.iconColor}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
