import React from 'react'

export default function CatInfo({ product, addToCart }) {
    return (<>
        <div className="cat_detail">
            <div className="catImage">
                <img src={product.image == null ? '' : product.image.url} alt={product.id} height='200px' width='200px' />
            </div>
            <div className="bio">
                <h1>BIO</h1>
                <p>ID: {product.id || 'N/A'}</p>
                <p>Name: {product.name || 'N/A'}</p>
                <p>Description:  {product.description || 'N/A'}</p>
            </div>
            <div className="info">
                <h1>INFO</h1>
                <p>Temperament:  {product.temperament || 'N/A'}</p>
                <p>Origin: {product.origin || 'N/A'}</p>
                <p>Child_friendly: {product.child_friendly || 'N/A'}</p>
                <p>Dog_friendly: {product.dog_friendly || 'N/A'}</p>
                <p>Energy_level: {product.energy_level || 'N/A'}</p>
                <p>Wikipedia_url: {product.wikipedia_url || 'N/A'}</p>
            </div>
            <div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    </>)

}