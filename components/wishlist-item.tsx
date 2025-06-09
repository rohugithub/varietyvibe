"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star, Trash2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types/product"

interface WishlistItemProps {
  product: Product
  viewMode: "grid" | "list"
}

export function WishlistItem({ product, viewMode }: WishlistItemProps) {
  const { removeFromWishlist } = useWishlist()
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    addItem(product)

    setTimeout(() => {
      setIsAdding(false)
      setJustAdded(true)

      setTimeout(() => {
        setJustAdded(false)
      }, 2000)
    }, 500)
  }

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product.id)
  }

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-md border flex-shrink-0">
              <Link href={`/product/${product.id}`}>
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </Link>
              {product.discount && (
                <Badge className="absolute top-1 left-1 bg-red-500 text-xs px-1 py-0">-{product.discount}%</Badge>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold hover:underline line-clamp-1">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              {product.inStock ? (
                <Badge variant="secondary" className="text-green-600 text-xs">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" className="text-xs">
                  Out of Stock
                </Badge>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding || justAdded}
                size="sm"
                variant={justAdded ? "secondary" : "default"}
                className="w-32"
              >
                {isAdding ? (
                  <>
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1" />
                    Adding...
                  </>
                ) : justAdded ? (
                  <>
                    <Check className="h-3 w-3 mr-1" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button onClick={handleRemoveFromWishlist} variant="outline" size="sm" className="w-32">
                <Trash2 className="h-3 w-3 mr-1" />
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        {product.discount && <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background text-red-500"
          onClick={handleRemoveFromWishlist}
        >
          <Heart className="h-4 w-4 fill-current" />
        </Button>
      </div>
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold line-clamp-2 hover:underline">{product.name}</h3>
        </Link>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through ml-2">${product.originalPrice}</span>
          )}
        </div>
        <div className="mt-2">
          {product.inStock ? (
            <Badge variant="secondary" className="text-green-600">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
      </CardContent>
      <div className="p-4 pt-0 space-y-2">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdding || justAdded}
          className="w-full"
          variant={justAdded ? "secondary" : "default"}
        >
          {isAdding ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Adding...
            </>
          ) : justAdded ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
        <Button onClick={handleRemoveFromWishlist} variant="outline" className="w-full">
          <Trash2 className="h-4 w-4 mr-2" />
          Remove from Wishlist
        </Button>
      </div>
    </Card>
  )
}
