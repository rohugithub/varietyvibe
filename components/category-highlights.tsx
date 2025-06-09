"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProductsByCategory } from "@/lib/products"
import type { Product } from "@/types/product"

const categoryHighlights = [
  {
    id: "bookworms-paradise",
    name: "BookWorms Paradise",
    shortName: "Books",
    icon: "📚",
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
    accentColor: "text-amber-700",
    borderColor: "border-amber-200",
    tagline: "Feed Your Mind",
    offer: "Buy 2 Get 1 Free",
  },
  {
    id: "home-furnishing",
    name: "Home Furnishing",
    shortName: "Home & Living",
    icon: "🏠",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
    accentColor: "text-green-700",
    borderColor: "border-green-200",
    tagline: "Transform Your Space",
    offer: "Free Delivery",
  },
  {
    id: "machine-zone",
    name: "Machine Zone",
    shortName: "Electronics",
    icon: "⚙️",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-100",
    accentColor: "text-blue-700",
    borderColor: "border-blue-200",
    tagline: "Latest Technology",
    offer: "Up to 50% OFF",
  },
]

interface CategoryHighlightProps {
  category: (typeof categoryHighlights)[0]
}

function CategoryHighlight({ category }: CategoryHighlightProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductsByCategory(category.id).then((data) => {
      setProducts(data.slice(0, 3)) // Get top 3 products
      setIsLoading(false)
    })
  }, [category.id])

  if (isLoading) {
    return (
      <Card className={`${category.bgColor} ${category.borderColor} border-2`}>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-300 rounded" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={`${category.bgColor} ${category.borderColor} border-2 hover:shadow-lg transition-all duration-300 group`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{category.icon}</div>
            <div>
              <h3 className={`text-xl font-bold ${category.accentColor}`}>{category.shortName}</h3>
              <p className="text-sm text-gray-600">{category.tagline}</p>
            </div>
          </div>
          <Badge className={`${category.accentColor} bg-white`}>{category.offer}</Badge>
        </div>

        <div className="space-y-3 mb-6">
          {products.map((product) => (
            <div key={product.id} className="flex items-center space-x-3 p-2 bg-white/50 rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{product.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-sm">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
          ))}
        </div>

        <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
          <Link href={`/category/${category.id}`}>
            Explore {category.shortName}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function CategoryHighlights() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Top Categories</h2>
          <p className="text-muted-foreground text-lg">Discover trending products from our most popular categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryHighlights.map((category) => (
            <CategoryHighlight key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
