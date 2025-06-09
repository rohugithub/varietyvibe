import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { Categories } from "@/components/categories"
import { MainCategoriesShowcase } from "@/components/main-categories-showcase"
import { Testimonials } from "@/components/testimonials"

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <Categories />
      <Suspense fallback={<div>Loading categories...</div>}>
        <MainCategoriesShowcase />
      </Suspense>
      <Testimonials />
    </>
  )
}
