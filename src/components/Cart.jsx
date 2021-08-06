import React, {useState} from 'react'

export default function Cart({cart, removeFromCart}){
    return(  <>          
        {cart.map((product, idx) =>(
            <div className='product' key={idx}>
              <img src={product.image} alt={product.id} height='200px' width='200px'/>
              <h3>{product.cost}</h3>          
              <button onClick={()=>removeFromCart(product)}>
                    Remove
                  </button>
              </div>
          ))}
      </>)

}