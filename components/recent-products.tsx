import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentProducts = [
  {
    id: 1,
    name: "Navy Blue Straight Kurti with Side Slits",
    price: "₹ 3421.00",
    addedDays: "30 day(s) ago",
    image: "/placeholder.svg?height=40&width=40&text=Kurti",
  },
  {
    id: 2,
    name: "Cotton Anarkali with Kalamkari Pattern",
    price: "₹ 3541.00",
    addedDays: "30 day(s) ago",
    image: "/placeholder.svg?height=40&width=40&text=Anarkali",
  },
  {
    id: 3,
    name: "Layered Georgette Anarkali Kurti",
    price: "₹ 3541.00",
    addedDays: "30 day(s) ago",
    image: "/placeholder.svg?height=40&width=40&text=Georgette",
  },
  {
    id: 4,
    name: "Sleeveless Silk Blend Anarkali",
    price: "₹ 3212.00",
    addedDays: "30 day(s) ago",
    image: "/placeholder.svg?height=40&width=40&text=Silk",
  },
  {
    id: 5,
    name: "Chanderi Silk Suit with Dupatta",
    price: "₹ 3215.00",
    addedDays: "30 day(s) ago",
    image: "/placeholder.svg?height=40&width=40&text=Chanderi",
  },
]

export function RecentProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Products</CardTitle>
        <p className="text-sm text-gray-500">Recently added products to your store.</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentProducts.map((product) => (
            <div key={product.id} className="flex items-center space-x-3">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-10 h-10 rounded-lg object-cover bg-gray-100"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                <p className="text-xs text-gray-500">Added {product.addedDays}</p>
              </div>
              <div className="text-sm font-semibold text-gray-900">{product.price}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
