"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getProductsByCategory } from "@/lib/products"
import type { Product } from "@/types/product"

const mainCategories = [
  {
    id: "bookworms-paradise",
    name: "BookWorms Paradise",
    displayName: "Books",
    icon: "📚",
    color: "from-amber-500 to-orange-600",
    description: "Discover amazing stories and expand your knowledge",
  },
  {
    id: "home-furnishing",
    name: "Home Furnishing",
    displayName: "Home & Living",
    icon: "🏠",
    color: "from-green-500 to-emerald-600",
    description: "Transform your space with premium furniture and decor",
  },
  {
    id: "machine-zone",
    name: "Machine Zone",
    displayName: "Electronics",
    icon: "⚙️",
    color: "from-blue-500 to-blue-600",
    description: "Latest technology and innovative gadgets",
  },
]

interface CategoryProductsProps {
  categoryId: string
  categoryName: string
  categoryIcon: string
  categoryColor: string
  description: string
}

function CategoryProducts({
  categoryId,
  categoryName,
  categoryIcon,
  categoryColor,
  description,
}: CategoryProductsProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductsByCategory(categoryId).then((data) => {
      setProducts(data.slice(0, 8)) // Get 8 products for carousel
      setIsLoading(false)
    })
  }, [categoryId])

  const itemsPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-20 bg-muted animate-pulse rounded-lg" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-96 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className={`bg-gradient-to-r ${categoryColor} rounded-xl p-6 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{categoryIcon}</div>
            <div>
              <h3 className="text-2xl font-bold">{categoryName}</h3>
              <p className="text-white/90">{description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 bg-white/20 hover:bg-white/30 text-white border-0"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 bg-white/20 hover:bg-white/30 text-white border-0"
              aria-label="Next products"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button variant="outline" size="lg" asChild>
          <a href={`/category/${categoryId}`}>View All {categoryName} Products</a>
        </Button>
      </div>
    </div>
  )
}

export function FeaturedCategories() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our top categories with handpicked products just for you
          </p>
        </div>

        <div className="space-y-16">
          {mainCategories.map((category) => (
            <CategoryProducts
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
              categoryIcon={category.icon}
              categoryColor={category.color}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
