import React from 'react'

export default function Products({ products, showCatInfo, addToCart }) {
  return (<>
    {products.map((product, idx) => (
      <div className='product' key={idx}>
        <img src={product.image == null ? '' : product.image.url} height='200px' width='200px' onClick={() => showCatInfo(product)} />
        <h3>£{product.cost}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </>)
}