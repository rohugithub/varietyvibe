"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getProductsByCategory } from "@/lib/products"
import type { Product } from "@/types/product"
import Link from "next/link"

const categories = [
  {
    id: "machine-zone",
    name: "Machine Zone",
    description: "Electronics & Technology",
    image: "/placeholder.svg?height=200&width=300&text=Electronics+Category",
    bgGradient: "from-slate-900 to-blue-900",
    accentColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "fashion-frenzy",
    name: "Fashion Frenzy",
    description: "Clothing & Accessories",
    image: "/placeholder.svg?height=200&width=300&text=Fashion+Category",
    bgGradient: "from-rose-900 to-pink-900",
    accentColor: "text-pink-600",
    borderColor: "border-pink-200",
  },
  {
    id: "home-furnishing",
    name: "Home Furnishing",
    description: "Furniture & Home Decor",
    image: "/placeholder.svg?height=200&width=300&text=Home+Category",
    bgGradient: "from-emerald-900 to-green-900",
    accentColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    id: "bookworms-paradise",
    name: "BookWorms Paradise",
    description: "Books & Literature",
    image: "/placeholder.svg?height=200&width=300&text=Books+Category",
    bgGradient: "from-amber-900 to-orange-900",
    accentColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    id: "stationary-sanctuary",
    name: "Stationary Sanctuary",
    description: "Office & School Supplies",
    image: "/placeholder.svg?height=200&width=300&text=Stationary+Category",
    bgGradient: "from-purple-900 to-violet-900",
    accentColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    id: "gamesphere",
    name: "GameSphere",
    description: "Gaming & Entertainment",
    image: "/placeholder.svg?height=200&width=300&text=Gaming+Category",
    bgGradient: "from-red-900 to-rose-900",
    accentColor: "text-red-600",
    borderColor: "border-red-200",
  },
]

interface CategorySectionProps {
  category: (typeof categories)[0]
  index: number
}

function CategorySection({ category, index }: CategorySectionProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductsByCategory(category.id).then((data) => {
      setProducts(data.slice(0, 8)) // Get 8 products for carousel
      setIsLoading(false)
    })
  }, [category.id])

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView.desktop)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView.desktop)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const isEven = index % 2 === 0

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-8 bg-muted animate-pulse rounded w-3/4" />
              <div className="h-4 bg-muted animate-pulse rounded w-full" />
              <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
        >
          {/* Category Info */}
          <div className={`space-y-8 ${isEven ? "" : "lg:col-start-2"}`}>
            <div className="space-y-6">
              <div>
                <h2 className={`text-4xl font-bold tracking-tight mb-4 ${category.accentColor}`}>{category.name}</h2>
                <p className="text-xl text-gray-600 leading-relaxed">{category.description}</p>
              </div>

              {/* Category Hero Image */}
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="relative h-64">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-60`} />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90">{products.length} Products Available</p>
                  </div>
                </div>
              </Card>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={`/category/${category.id}`}>
                  Explore All {category.name} Products
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Products Carousel */}
          <div className={`space-y-6 ${isEven ? "" : "lg:col-start-1"}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Featured Products</h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-10 w-10"
                  aria-label="Previous products"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="h-10 w-10"
                  aria-label="Next products"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`,
                }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 flex-shrink-0 px-2">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center space-x-2 lg:hidden">
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex * 2)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / 2) === dotIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to product group ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CategoryProductShowcase() {
  return (
    <div className="bg-white">
      {categories.map((category, index) => (
        <div key={category.id}>
          <CategorySection category={category} index={index} />
          {index < categories.length - 1 && <div className="border-t border-gray-100 mx-auto max-w-6xl" />}
        </div>
      ))}
    </div>
  )
}
