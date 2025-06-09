import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag, ArrowRight, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Blog - ECommerce",
  description: "Stay updated with the latest fashion trends, shopping tips, and lifestyle content.",
}

const featuredPost = {
  id: 1,
  title: "The Ultimate Guide to Sustainable Fashion: Building an Eco-Friendly Wardrobe",
  excerpt:
    "Discover how to make conscious fashion choices that benefit both your style and the environment. Learn about sustainable materials, ethical brands, and timeless pieces.",
  image: "/placeholder.svg?height=400&width=800&text=Sustainable+Fashion+Guide",
  author: "Priya Sharma",
  date: "December 15, 2024",
  category: "Fashion",
  readTime: "8 min read",
  featured: true,
}

const blogPosts = [
  {
    id: 2,
    title: "Top 10 Home Decor Trends for 2024",
    excerpt: "Transform your living space with these trending home decor ideas that combine style with functionality.",
    image: "/placeholder.svg?height=300&width=400&text=Home+Decor+Trends",
    author: "Rajesh Kumar",
    date: "December 12, 2024",
    category: "Home & Living",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Essential Tech Gadgets Every Student Needs",
    excerpt: "From laptops to smart accessories, discover the must-have tech items for academic success.",
    image: "/placeholder.svg?height=300&width=400&text=Student+Tech+Gadgets",
    author: "Amit Patel",
    date: "December 10, 2024",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Building Your Perfect Gaming Setup on a Budget",
    excerpt: "Create an amazing gaming experience without breaking the bank with these smart shopping tips.",
    image: "/placeholder.svg?height=300&width=400&text=Budget+Gaming+Setup",
    author: "Sneha Gupta",
    date: "December 8, 2024",
    category: "Gaming",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "The Art of Gift Wrapping: Creative Ideas for Every Occasion",
    excerpt: "Make your gifts extra special with these creative and eco-friendly wrapping techniques.",
    image: "/placeholder.svg?height=300&width=400&text=Gift+Wrapping+Ideas",
    author: "Meera Singh",
    date: "December 5, 2024",
    category: "Lifestyle",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Organizing Your Workspace for Maximum Productivity",
    excerpt: "Learn how to create an organized and inspiring workspace that boosts your productivity.",
    image: "/placeholder.svg?height=300&width=400&text=Workspace+Organization",
    author: "Vikram Joshi",
    date: "December 3, 2024",
    category: "Productivity",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "Seasonal Fashion: Transitioning Your Wardrobe",
    excerpt: "Master the art of seasonal dressing with versatile pieces that work year-round.",
    image: "/placeholder.svg?height=300&width=400&text=Seasonal+Fashion",
    author: "Ananya Desai",
    date: "December 1, 2024",
    category: "Fashion",
    readTime: "5 min read",
  },
]

const categories = [
  { name: "Fashion", count: 12, color: "bg-pink-100 text-pink-800" },
  { name: "Technology", count: 8, color: "bg-blue-100 text-blue-800" },
  { name: "Home & Living", count: 10, color: "bg-green-100 text-green-800" },
  { name: "Lifestyle", count: 15, color: "bg-purple-100 text-purple-800" },
  { name: "Gaming", count: 6, color: "bg-red-100 text-red-800" },
  { name: "Productivity", count: 7, color: "bg-yellow-100 text-yellow-800" },
]

const trendingPosts = [
  { title: "Black Friday Shopping Guide 2024", views: "12.5K" },
  { title: "Winter Fashion Essentials", views: "8.2K" },
  { title: "Smart Home Setup for Beginners", views: "6.8K" },
  { title: "Best Books to Read This Month", views: "5.4K" },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with the latest trends, tips, and insights from our experts
            </p>

            {/* Search and Newsletter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input type="search" placeholder="Search articles..." className="w-full" />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe to Newsletter</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <Card className="mb-12 overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-emerald-600 transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-semibold mb-2 line-clamp-2 hover:text-emerald-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="secondary" className={category.color}>
                          {category.count}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Trending
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingPosts.map((post, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <Link
                            href="#"
                            className="text-sm font-medium hover:text-emerald-600 transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">{post.views} views</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest articles and exclusive content delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Your email address" className="w-full" />
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">No spam, unsubscribe anytime.</p>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Fashion", "Tech", "Home Decor", "Shopping Tips", "Trends", "Lifestyle", "Reviews", "Guides"].map(
                      (tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="hover:bg-emerald-50 hover:border-emerald-200 cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
