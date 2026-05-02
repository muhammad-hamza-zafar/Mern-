import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid({products}) {
  return (
    <>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </>
  )
}

export default ProductGrid
