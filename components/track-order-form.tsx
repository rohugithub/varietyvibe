"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"

export function TrackOrderForm() {
  const [searchMethod, setSearchMethod] = useState<"order-number" | "email">("order-number")
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (searchMethod === "order-number" && !orderNumber) {
      toast({
        title: "Error",
        description: "Please enter your order number",
        variant: "destructive",
      })
      return
    }

    if (searchMethod === "email" && !email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Order Found",
        description: "Your order details have been loaded below.",
      })

      // In a real implementation, you would:
      // 1. Make an API call to fetch the order
      // 2. Update state with the order data
      // 3. Show the OrderTrackingResult component with the data
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Find Your Order</h2>
        <p className="text-gray-500">Enter your order details below to track your purchase.</p>
      </div>

      <RadioGroup
        value={searchMethod}
        onValueChange={(value) => setSearchMethod(value as "order-number" | "email")}
        className="grid grid-cols-2 gap-4"
      >
        <div className="flex items-center space-x-2 border rounded-md p-4">
          <RadioGroupItem value="order-number" id="order-number" />
          <Label htmlFor="order-number" className="cursor-pointer w-full">
            Track by Order Number
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-4">
          <RadioGroupItem value="email" id="email" />
          <Label htmlFor="email" className="cursor-pointer w-full">
            Track by Email
          </Label>
        </div>
      </RadioGroup>

      {searchMethod === "order-number" ? (
        <div className="space-y-2">
          <Label htmlFor="order-number-input">Order Number</Label>
          <Input
            id="order-number-input"
            placeholder="Enter your order number (e.g., ORD-12345678)"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <p className="text-sm text-gray-500">Your order number can be found in your order confirmation email.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-input">Email Address</Label>
            <Input
              id="email-input"
              type="email"
              placeholder="Enter the email used for your order"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500">We'll show you all orders associated with this email address.</p>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Searching..." : "Track Order"}
      </Button>
    </form>
  )
}
