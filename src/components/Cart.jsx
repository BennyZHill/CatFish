import React from 'react'

export default function Cart({ cart, totalcost, removeFromCart, emptyCart }) {
    return (<>
        {cart.map((product, idx) => (
            <div className='product' key={idx}>
                <img src={product.image == null ? '' : product.image.url} alt={idx} height='200px' width='200px' />
                <h3>£{product.cost}</h3>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
        ))}
        <h1>Total £{totalcost}</h1>
        <button onClick={() => emptyCart()}>Checkout</button>
    </>)

}