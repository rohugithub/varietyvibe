"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Trash2, Share2, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { WishlistItem } from "@/components/wishlist-item"

export function WishlistContent() {
  const { items, clearWishlist } = useWishlist()
  const { addItem } = useCart()
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")

  const handleAddAllToCart = () => {
    items.forEach((item) => {
      addItem(item)
    })
  }

  const handleShareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Wishlist",
        text: "Check out my wishlist!",
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Wishlist link copied to clipboard!")
    }
  }

  // Filter and sort items
  const filteredItems = items.filter((item) => {
    if (filterBy === "all") return true
    if (filterBy === "in-stock") return item.inStock
    if (filterBy === "on-sale") return item.discount && item.discount > 0
    return true
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "recent":
      default:
        return 0 // Keep original order for recent
    }
  })

  const categories = [...new Set(items.map((item) => item.category))]
  const inStockCount = items.filter((item) => item.inStock).length
  const onSaleCount = items.filter((item) => item.discount && item.discount > 0).length

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Heart className="h-8 w-8 text-red-500" />
            My Wishlist
          </h1>
          <p className="text-muted-foreground mt-1">
            {items.length} {items.length === 1 ? "item" : "items"} saved
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleShareWishlist} size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          {items.length > 0 && (
            <>
              <Button onClick={handleAddAllToCart} size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add All to Cart
              </Button>
              <Button variant="outline" onClick={clearWishlist} size="sm" className="text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              Save items you love by clicking the heart icon on any product. They'll appear here for easy access later.
            </p>
            <Button asChild>
              <a href="/products">Start Shopping</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Stats and Filters */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Stats */}
            <div className="lg:w-64 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Wishlist Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <Badge variant="secondary">{items.length}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>In Stock:</span>
                      <Badge variant="secondary" className="text-green-600">
                        {inStockCount}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>On Sale:</span>
                      <Badge variant="secondary" className="text-red-600">
                        {onSaleCount}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories:</span>
                      <Badge variant="secondary">{categories.length}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <div key={category} className="text-sm text-muted-foreground">
                        {category} ({items.filter((item) => item.category === category).length})
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Filters and Sort */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <Select value={filterBy} onValueChange={setFilterBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Items</SelectItem>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="on-sale">On Sale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently Added</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Wishlist Items */}
              <Tabs defaultValue="grid" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>

                <TabsContent value="grid">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedItems.map((item) => (
                      <WishlistItem key={item.id} product={item} viewMode="grid" />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="list">
                  <div className="space-y-4">
                    {sortedItems.map((item) => (
                      <WishlistItem key={item.id} product={item} viewMode="list" />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
