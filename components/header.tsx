"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/hooks/use-cart";
import { SideCart } from "@/components/side-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import Logo from "@/public/logo/VarietyVibesLogo3.png";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const wishlistItemCount = wishlistItems.length;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 px-6 h-24 w-full border-b bg-[#b74d80] z-50 ">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-32 w-60 relative">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="variety logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Search (centered absolutely) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 pr-8 py-1.5 h-[50px] rounded-full shadow-md text-sm placeholder:text-base placeholder:align-middle border border- [#b74d80f3]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right side navigation */}
          <nav className="flex items-center space-x-2 px-4 py-2 ">
            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-12 w-12"
              asChild
            >
              <Link
                href="/wishlist"
                className="relative flex items-center justify-center"
              >
                <Heart
                  className="h-6 w-6 text-white"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                />
                {wishlistItemCount > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white flex items-center justify-center">
                    {wishlistItemCount}
                  </Badge>
                )}
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-12 w-12"
              onClick={handleCartClick}
            >
              <ShoppingCart
                className="h-6 w-6 text-white"
                style={{ height: "1.5rem", width: "1.5rem" }}
              />
              {itemCount > 0 && (
                <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white animate-pulse flex items-center justify-center">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <User
                    className="h-6 w-6 text-white"
                    style={{ height: "1.5rem", width: "1.5rem" }}
                  />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Create Account</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Your Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Your Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/admin">Admin Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>{" "}
      {/* fix the header section in center all items fix center */}
      {/* Side Cart */}
      <SideCart isOpen={isCartOpen} onClose={handleCartClose} />
    </>
  );
}
