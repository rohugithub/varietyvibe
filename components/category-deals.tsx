import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categoryDeals = [
  {
    category: "BookWorms Paradise",
    title: "Bestseller Books Sale",
    description: "Discover amazing stories and knowledge",
    image: "/placeholder.svg?height=200&width=300&text=Books+Deal",
    discount: "Buy 2 Get 1 Free",
    href: "/category/bookworms-paradise",
    bgColor: "bg-amber-50",
    textColor: "text-amber-800",
  },
  {
    category: "Stationary Sanctuary",
    title: "Back to School Essentials",
    description: "Everything you need for studies",
    image: "/placeholder.svg?height=200&width=300&text=Stationary+Deal",
    discount: "30% OFF",
    href: "/category/stationary-sanctuary",
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
  },
  {
    category: "GameSphere",
    title: "Gaming Gear Bonanza",
    description: "Level up your gaming setup",
    image: "/placeholder.svg?height=200&width=300&text=Gaming+Deal",
    discount: "Limited Time",
    href: "/category/gamesphere",
    bgColor: "bg-red-50",
    textColor: "text-red-800",
  },
]

export function CategoryDeals() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Special Category Deals</h2>
          <p className="text-muted-foreground text-lg">
            Don't miss out on these exclusive offers from our specialized categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryDeals.map((deal) => (
            <Card
              key={deal.category}
              className={`${deal.bgColor} border-0 overflow-hidden group hover:shadow-lg transition-all duration-300`}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 right-3 ${deal.textColor} bg-white`}>{deal.discount}</Badge>
                </div>
                <div className="p-6">
                  <div className={`text-sm font-medium ${deal.textColor} mb-1`}>{deal.category}</div>
                  <h3 className="text-lg font-bold mb-2">{deal.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={deal.href}>Shop Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
