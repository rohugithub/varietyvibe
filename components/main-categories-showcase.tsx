"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { getProductsByCategory } from "@/lib/products";
import type { Product } from "@/types/product";

const mainCategories = [
  {
    id: "machine-zone",
    name: "Machine Zone",
    description: "Latest Electronics & Technology",
  },
  {
    id: "home-furnishing",
    name: "Home Furnishing",
    description: "Premium Furniture & Home Decor",
  },
  {
    id: "bookworms-paradise",
    name: "Books",
    description: "Knowledge & Entertainment",
  },
];

interface CategoryProductsProps {
  categoryId: string;
  categoryName: string;
  description: string;
}

function CategoryProducts({
  categoryId,
  categoryName,
  description,
}: CategoryProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(categoryId).then((data) => {
      setProducts(data.slice(0, 8)); // Max 8 products
      setIsLoading(false);
    });
  }, [categoryId]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, products.length]);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView.desktop);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView.desktop);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl space-y-6 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-8 bg-muted animate-pulse rounded w-48" />
              <div className="h-4 bg-muted animate-pulse rounded w-64" />
            </div>
            <div className="flex space-x-2">
              <div className="h-10 w-10 bg-muted animate-pulse rounded" />
              <div className="h-10 w-10 bg-muted animate-pulse rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-screen-xl space-y-10 ">
        {/* Category Header */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl text-[#B74D80] font-light tracking-tight leading-tight text-left">
            {categoryName}
          </h2>
          <p className="text-gray-800 text-md max-w-2xl text-left">
            {description}
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end space-x-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-10 w-10 bg-[#eb6fabec] hover:bg-[#b74d80af] text-white"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-10 w-10 bg-[#eb6fabec] hover:bg-[#b74d80af] text-white"
            aria-label="Next products"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Products Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / itemsPerView.desktop)
              }%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots for Mobile/Tablet */}
        <div className="flex justify-center space-x-2 lg:hidden">
          {Array.from({ length: Math.ceil(products.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 2)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / 2) === index
                    ? "bg-primary"
                    : "bg-muted"
                }`}
                aria-label={`Go to product group ${index + 1}`}
              />
            )
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-[#B74D80] text-sm hover:bg-[#b74d80af] text-white hover:text-white"
          >
            <a href={`/category/${categoryId}`}>View All Products</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function MainCategoriesShowcase() {
  return (
    <section className="py-5 md:py-16">
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl space-y-16">
          {mainCategories.map((category) => (
            <CategoryProducts
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
