import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/hooks/use-cart"
import { WishlistProvider } from "@/hooks/use-wishlist"
import { Header } from "@/components/header"
import { CategoryHeader } from "@/components/category-header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ECommerce - Your Online Shopping Destination",
  description: "Shop from millions of products with fast delivery and great prices.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WishlistProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <CategoryHeader />
              <main className="flex-1 bg-background">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  )
}
