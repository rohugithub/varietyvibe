"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  FolderOpen,
  Tag,
  Users,
  Home,
  MessageSquare,
  ShoppingCart,
  FileText,
  Percent,
  Megaphone,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: FolderOpen,
  },
  {
    title: "Brands",
    href: "/dashboard/brands",
    icon: Tag,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Homepage Sections",
    href: "/dashboard/homepage",
    icon: Home,
  },
  {
    title: "Testimonials",
    href: "/dashboard/testimonials",
    icon: MessageSquare,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Blogs",
    href: "/dashboard/blogs",
    icon: FileText,
  },
  {
    title: "Coupons",
    href: "/dashboard/coupons",
    icon: Percent,
  },
  {
    title: "Announcement Bar",
    href: "/dashboard/announcements",
    icon: Megaphone,
  },
  {
    title: "Faqs",
    href: "/dashboard/faqs",
    icon: HelpCircle,
  },
  {
    title: "Emails",
    href: "/dashboard/emails",
    icon: Mail,
  },
  {
    title: "Contact Us",
    href: "/dashboard/contact",
    icon: Phone,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-teal-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-semibold text-gray-900">Admin Dashboard</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
