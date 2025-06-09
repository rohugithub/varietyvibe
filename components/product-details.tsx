"use client"

import { useState } from "react"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { ImageMagnifier } from "@/components/image-magnifier"
import type { Product } from "@/types/product"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  // Mock multiple product images
  const productImages = [
    product.image,
    `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(product.name + " - Angle 2")}`,
    `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(product.name + " - Angle 3")}`,
    `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(product.name + " - Angle 4")}`,
  ]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div className="space-y-4">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <ImageMagnifier
            src={productImages[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            magnifierSize={180}
            zoomLevel={2.5}
          />
          {product.discount && <Badge className="absolute top-4 left-4 bg-red-500">-{product.discount}% OFF</Badge>}
        </div>

        {/* Thumbnail gallery */}
        <div className="grid grid-cols-4 gap-2">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer border rounded-md overflow-hidden aspect-square relative ${
                selectedImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} - View ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
          {product.inStock ? (
            <Badge variant="secondary" className="text-green-600">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="font-medium">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded px-3 py-1"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleAddToCart} disabled={!product.inStock} className="flex-1" size="lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <Truck className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Free Shipping</span>
              <span className="text-xs text-muted-foreground">On orders over $50</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Warranty</span>
              <span className="text-xs text-muted-foreground">1 year coverage</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <RotateCcw className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Returns</span>
              <span className="text-xs text-muted-foreground">30 day policy</span>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <p className="text-muted-foreground">{product.description}</p>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Brand:</span>
                <span>{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">SKU:</span>
                <span>{product.id}</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Customer Reviews</h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-medium">John Doe</span>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm">Great product! Exactly what I was looking for.</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
