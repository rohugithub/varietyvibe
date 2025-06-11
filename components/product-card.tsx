"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem(product);

    // Show success state
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      onAddToCart?.();

      // Reset success state
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 500);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Card className="group overflow-hidden ">
      {/* Fixed size image container */}
      <div className="relative w-full h-[380px] overflow-hidden">
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-fill transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Discount Badge */}
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded">
            -{product.discount}%
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-background/80 hover:bg-background transition-colors ${
            inWishlist
              ? "text-red-500"
              : "text-muted-foreground hover:text-red-500"
          }`}
          onClick={handleWishlistToggle}
        >
          <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Content Section */}
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium line-clamp-2 hover:underline  text-xl ">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviews})
            </span>
          </div>

        {/* Price */}
        <div className="flex items-center mt-2">
          <span className="text-lg font-medium text-[#d8689e]">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm  line-through ml-2 text-[#d8689e9a]">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      {/* Footer Add to Cart */}
      {/* <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full transition-all duration-200"
          disabled={isAdding || justAdded}
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
      </CardFooter> */}
    </Card>
  );
}
