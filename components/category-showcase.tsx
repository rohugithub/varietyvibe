import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categoryShowcases = [
  {
    name: "Machine Zone",
    href: "/category/machine-zone",
    image: "/placeholder.svg?height=300&width=400&text=Electronics+Showcase",
    description: "Latest smartphones, laptops, and smart devices",
    products: ["iPhone 15 Pro", "MacBook Air M2", "Smart Watch"],
    discount: "Up to 50% OFF",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Fashion Frenzy",
    href: "/category/fashion-frenzy",
    image: "/placeholder.svg?height=300&width=400&text=Fashion+Showcase",
    description: "Trendy outfits and accessories for every occasion",
    products: ["Designer Dresses", "Casual Wear", "Accessories"],
    discount: "New Arrivals",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Home Furnishing",
    href: "/category/home-furnishing",
    image: "/placeholder.svg?height=300&width=400&text=Home+Showcase",
    description: "Premium furniture and home decor essentials",
    products: ["Sofa Sets", "Dining Tables", "Wall Art"],
    discount: "Free Delivery",
    color: "from-green-500 to-emerald-600",
  },
]

export function CategoryShowcase() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Categories</h2>
          <p className="text-muted-foreground text-lg">Discover our most popular categories with exclusive deals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryShowcases.map((category) => (
            <Card
              key={category.name}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <Badge className="absolute top-4 left-4 bg-white text-black hover:bg-white">{category.discount}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="space-y-2 mb-4">
                  {category.products.map((product, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {product}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={category.href}>Explore {category.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
