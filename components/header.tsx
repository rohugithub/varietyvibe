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
      <header className="sticky top-0 z-50 w-full border-b bg-[#b74d80] px-4 md:px-6 h-24">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-48 w-36 sm:h-16 sm:w-40">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="variety logo"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Center Search Bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 pr-8 py-1.5 h-[46px] rounded-full shadow-md text-sm placeholder:text-base border border-[#b74d80]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-2">
            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:text-black"
            >
              <Link
                href="/wishlist"
                className="relative flex items-center justify-center"
              >
                <Heart className="h-6 w-6" />
                {wishlistItemCount > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 text-xs bg-red-500 text-white flex items-center justify-center rounded-full">
                    {wishlistItemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:text-black"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 text-xs bg-red-500 text-white animate-pulse flex items-center justify-center rounded-full">
                  {itemCount}
                </Badge>
              )}
            </Button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-black"
                >
                  <User className="h-6 w-6" />
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
