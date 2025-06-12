"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Package, Truck, CheckCircle, Clock, MapPin, FileText, MessageSquare, AlertCircle } from "lucide-react"

// This would come from your API in a real implementation
const SAMPLE_ORDER = {
  id: "ORD-38291042",
  date: "June 8, 2025",
  status: "in-transit",
  estimatedDelivery: "June 14, 2025",
  trackingNumber: "1ZW4X9876543210",
  carrier: "UPS",
  shippingAddress: {
    name: "John Smith",
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
  },
  items: [
    {
      id: "1",
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Smart Watch Series 5",
      price: 399.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  timeline: [
    {
      date: "June 8, 2025",
      time: "9:30 AM",
      status: "Order Placed",
      description: "Your order has been received and is being processed.",
      location: "Online",
    },
    {
      date: "June 9, 2025",
      time: "10:15 AM",
      status: "Order Processed",
      description: "Payment confirmed and order has been processed.",
      location: "Processing Center",
    },
    {
      date: "June 10, 2025",
      time: "2:45 PM",
      status: "Order Shipped",
      description: "Your order has been shipped with UPS.",
      location: "Distribution Center, Chicago, IL",
    },
    {
      date: "June 11, 2025",
      time: "8:20 AM",
      status: "In Transit",
      description: "Your package is on its way.",
      location: "UPS Facility, Cleveland, OH",
    },
  ],
  total: 649.98,
  shipping: 12.99,
  tax: 52.0,
}

export function OrderTrackingResult() {
  const [showDetails, setShowDetails] = useState(false)

  // Helper function to get status step
  const getStatusStep = (status: string) => {
    switch (status) {
      case "processing":
        return 0
      case "shipped":
        return 1
      case "in-transit":
        return 2
      case "delivered":
        return 3
      default:
        return 0
    }
  }

  const currentStep = getStatusStep(SAMPLE_ORDER.status)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Order #{SAMPLE_ORDER.id}</h2>
            <p className="text-gray-500">Placed on {SAMPLE_ORDER.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant={SAMPLE_ORDER.status === "delivered" ? "default" : "secondary"}
              className="px-3 py-1 text-sm"
            >
              {SAMPLE_ORDER.status === "in-transit" ? "In Transit" : SAMPLE_ORDER.status}
            </Badge>
            <Button variant="outline" size="sm">
              Need Help?
            </Button>
          </div>
        </div>
      </div>

      {/* Tracking Progress */}
      <div className="p-6 bg-gray-50">
        <h3 className="text-lg font-semibold mb-6">Shipping Status</h3>

        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
            <div className="h-full bg-[#BA5586]" style={{ width: `${(currentStep / 3) * 100}%` }} />
          </div>

          {/* Steps */}
          <div className="flex justify-between relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${currentStep >= 0 ? "bg-[#BA5586] text-white" : "bg-gray-200"}`}
              >
                <Package size={20} />
              </div>
              <p className="mt-2 text-sm font-medium">Processing</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${currentStep >= 1 ? "bg-[#BA5586] text-white" : "bg-gray-200"}`}
              >
                <Truck size={20} />
              </div>
              <p className="mt-2 text-sm font-medium">Shipped</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${currentStep >= 2 ? "bg-[#BA5586] text-white" : "bg-gray-200"}`}
              >
                <Clock size={20} />
              </div>
              <p className="mt-2 text-sm font-medium">In Transit</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${currentStep >= 3 ? "bg-teal-500 text-white" : "bg-gray-200"}`}
              >
                <CheckCircle size={20} />
              </div>
              <p className="mt-2 text-sm font-medium">Delivered</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 border rounded-md bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ba5586ea] rounded-full">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium">Estimated Delivery</p>
                <p className="text-lg font-bold">{SAMPLE_ORDER.estimatedDelivery}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Tracking Number:</p>
              <div className="flex items-center gap-2">
                <p className="font-medium">{SAMPLE_ORDER.trackingNumber}</p>
                <Badge variant="outline">{SAMPLE_ORDER.carrier}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for different information */}
      <Tabs defaultValue="timeline" className="p-6">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="details">Order Details</TabsTrigger>
          <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-6">
            {SAMPLE_ORDER.timeline.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? "bg-[#BA5586] text-white" : "bg-gray-100"}`}
                  >
                    {index === 0 ? <CheckCircle size={16} /> : <Clock size={16} className="text-gray-500" />}
                  </div>
                  {index < SAMPLE_ORDER.timeline.length - 1 && (
                    <div className="absolute top-8 bottom-0 left-4 w-0.5 bg-gray-200" />
                  )}
                </div>

                <div className="pb-6">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{event.status}</h4>
                    <Badge variant="outline" className="text-xs">
                      {event.time}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                  <p className="mt-1">{event.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Order Items</h3>
              <div className="space-y-4">
                {SAMPLE_ORDER.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 border rounded-md">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-500">Subtotal</p>
                  <p>${SAMPLE_ORDER.total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Shipping</p>
                  <p>${SAMPLE_ORDER.shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Tax</p>
                  <p>${SAMPLE_ORDER.tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <p>Total</p>
                  <p>${(SAMPLE_ORDER.total + SAMPLE_ORDER.shipping + SAMPLE_ORDER.tax).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="shipping">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Shipping Address</h3>
              <div className="p-4 border rounded-md">
                <p className="font-medium">{SAMPLE_ORDER.shippingAddress.name}</p>
                <p>{SAMPLE_ORDER.shippingAddress.street}</p>
                <p>
                  {SAMPLE_ORDER.shippingAddress.city}, {SAMPLE_ORDER.shippingAddress.state}{" "}
                  {SAMPLE_ORDER.shippingAddress.zip}
                </p>
                <p>{SAMPLE_ORDER.shippingAddress.country}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Shipping Method</h3>
              <div className="p-4 border rounded-md flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{SAMPLE_ORDER.carrier} Standard Shipping</p>
                  <p className="text-sm text-gray-500">Estimated delivery: {SAMPLE_ORDER.estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional Actions */}
      <div className="p-6 border-t bg-gray-50">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <FileText size={16} />
            <span>Download Invoice</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>Contact Support</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <AlertCircle size={16} />
            <span>Report Issue</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
