"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getProducts } from "@/lib/products"
import type { Product } from "@/types/product"

interface FeaturedProductsProps {
  products?: Product[]
}

export function FeaturedProducts({ products: initialProducts }: FeaturedProductsProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts || [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(!initialProducts)

  useEffect(() => {
    if (!initialProducts) {
      getProducts().then((data) => {
        setProducts(data.slice(0, 12)) // Get 12 products for carousel
        setIsLoading(false)
      })
    }
  }, [initialProducts])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 4000) // Auto-advance every 4 seconds

    return () => clearInterval(timer)
  }, [currentIndex, products.length])

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

  if (isLoading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-96 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
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
            <Button variant="outline" size="icon" onClick={nextSlide} className="h-10 w-10" aria-label="Next products">
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
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / 2) === index ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to product group ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <a href="/products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
