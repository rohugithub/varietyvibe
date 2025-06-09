import { notFound } from "next/navigation"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { getProductById } from "@/lib/products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-8">
      <ProductDetails product={product} />
      <RelatedProducts categoryId={product.categoryId} currentProductId={product.id} />
    </div>
  )
}
