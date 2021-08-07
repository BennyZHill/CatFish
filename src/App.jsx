import React, { useState, useEffect } from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=67'
//const API_URL = 'https://api.thecatapi.com/v1/breeds'
// const apiKey = `1ef81c01-f0b1-4971-9655-2017bd4c6bfc`

function App() {

  // shopping cart
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(PAGE_PRODUCTS)
  const [products, setProducts] = useState(null)
  const [isInputProductCost, setInputProductCost] = useState(false)
  //fetch items
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then(data => {
      setProducts(data)
    })
    .catch(error => {
      console.error("Error fetching data: ", error)
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const inputProductCost = (products) => {
    const cost = Math.ceil(((Math.random() * (10 - 2)) + 2)) * 50
    products.map((product) => (
      product.cost = cost
    ))
    setInputProductCost(true)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  if (loading) return "Loading"
  if (error) return "Error"
  return (
    <div className='wrapper'>
      <div className='bubbles'>
        <div className='bubble1'></div>
        <div className='bubble2'></div>
        <div className='bubble3'></div>
        <div className='bubble4'></div>
        <div className='bubble5'></div>
        <div className='bubble6'></div>
      </div>
      <h1 className='title'>CAT-FISHER</h1>
      <h2 className='subtitle'>Picking the right partner for the job</h2>
      <div className='home-img'></div>

      <div className='products'></div>
      {/* Button can be replaced by nav bar */}
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {!isInputProductCost && inputProductCost(products)}
      {page === PAGE_PRODUCTS && <Products products={products} addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
};

export default App;
