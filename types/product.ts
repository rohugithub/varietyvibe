export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  category: string
  categoryId: string
  brand: string
  rating: number
  reviews: number
  inStock: boolean
}
