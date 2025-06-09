"use client"

import { Package, Truck, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const orders = [
  {
    id: "#3001",
    date: "March 15, 2024",
    status: "Delivered",
    total: "$299.99",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: "$199.99" },
      { name: "Phone Case", quantity: 2, price: "$49.99" },
    ],
  },
  {
    id: "#3002",
    date: "March 10, 2024",
    status: "Shipped",
    total: "$149.99",
    items: [{ name: "Coffee Maker", quantity: 1, price: "$149.99" }],
  },
  {
    id: "#3003",
    date: "March 5, 2024",
    status: "Processing",
    total: "$79.99",
    items: [{ name: "Gaming Mouse", quantity: 1, price: "$79.99" }],
  },
]

export function OrderHistory() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Order History</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{order.total}</p>
                  <Badge
                    variant={
                      order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"
                    }
                  >
                    {order.status === "Delivered" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {order.status === "Shipped" && <Truck className="h-3 w-3 mr-1" />}
                    {order.status === "Processing" && <Package className="h-3 w-3 mr-1" />}
                    {order.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Track Package
                </Button>
                {order.status === "Delivered" && (
                  <Button variant="outline" size="sm">
                    Buy Again
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
