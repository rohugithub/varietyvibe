import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Machine Zone",
    href: "/category/machine-zone",
    description: "Electronics & Technology",
    image: "/category-banner/cat1.png",
    productCount: "2,500+ Products",
    bgGradient: "from-slate-900 to-blue-900",
  },
  {
    name: "Fashion Frenzy",
    href: "/category/fashion-frenzy",
    description: "Clothing & Accessories",
    image: "/category-banner/cat2.png",
    productCount: "3,200+ Products",
    bgGradient: "from-rose-900 to-pink-900",
  },
  {
    name: "Home Furnishing",
    href: "/category/home-furnishing",
    description: "Furniture & Home Decor",
    image: "/category-banner/cat3.png",
    productCount: "1,800+ Products",
    bgGradient: "from-emerald-900 to-green-900",
  },
  {
    name: "BookWorms Paradise",
    href: "/category/bookworms-paradise",
    description: "Books & Literature",
    image: "/category-banner/cat4.png",
    productCount: "5,000+ Products",
    bgGradient: "from-amber-900 to-orange-900",
  },
  {
    name: "Stationary Sanctuary",
    href: "/category/stationary-sanctuary",
    description: "Office & School Supplies",
    image: "/category-banner/cat5.png",
    productCount: "1,200+ Products",
    bgGradient: "from-purple-900 to-violet-900",
  },
  {
    name: "GameSphere",
    href: "/category/gamesphere",
    description: "Gaming & Entertainment",
    image: "/category-banner/cat6.png",
    productCount: "900+ Products",
    bgGradient: "from-red-900 to-rose-900",
  },
]

export function Categories() {
  return (
    <section className="py-10 px-10 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl ml-3 text-[#B74D80]  font-light tracking-tight leading-tight">Explore Our Categories</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-snug">
            Discover premium products across our carefully curated categories, each designed to meet your specific needs
            and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 " />

                  {/* Category Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                        <p className="text-white/90 text-sm">{category.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">{category.productCount}</span>
                    <span className="text-sm text-primary font-semibold group-hover:text-primary/80 transition-colors">
                      Shop Now →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span className="w-12 h-px bg-gray-300"></span>
            <span className="text-sm font-medium">Can't find what you're looking for?</span>
            <span className="w-12 h-px bg-gray-300"></span>
          </div>
          <p className="mt-4 text-gray-500">
            <Link href="/products" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Browse all products
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
              contact our support team
            </Link>
          </p>
        </div> */}
      </div>
    </section>
  )
}
