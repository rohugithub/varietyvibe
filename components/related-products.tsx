import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/products"

interface RelatedProductsProps {
  categoryId: string
  currentProductId: string
}

export async function RelatedProducts({ categoryId, currentProductId }: RelatedProductsProps) {
  const products = await getProducts()
  const relatedProducts = products
    .filter((product) => product.categoryId === categoryId && product.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-medium tracking-tight mb-8 text-[#b74d80]">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
