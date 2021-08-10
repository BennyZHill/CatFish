
import React, { useState, useEffect } from 'react'
//import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import Payment from './components/Payment'
import CatInfo from './components/CatInfo'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'
const PAGE_PAYMENT = 'payment'
const PAGE_CATINFO = 'catinfo'

const API_URL = 'https://api.thecatapi.com/v1/breeds'
//const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=67'
// const apiKey = `1ef81c01-f0b1-4971-9655-2017bd4c6bfc`

function App() {

  // shopping c art
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(PAGE_PRODUCTS)
  const [product, setProduct] = useState(null)
  const [products, setProducts] = useState(null)
  const [isInputProductCost, setInputProductCost] = useState(false)
  const [totalcost, setTotalCost] = useState(0)

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
    products.map((product) => (
      product.cost = Math.ceil(((Math.random() * (10 - 2)) + 2)) * 50
    ))
    setInputProductCost(true)
  }

  const emptyCart = () => {
    setCart([])
    setTotalCost(0)
    setPage(PAGE_PAYMENT)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
    setTotalCost(totalcost + product.cost)
  }

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
    setTotalCost(totalcost - productToRemove.cost)
  }

  const showCatInfo = (product) => {
    setProduct(product)
    setPage(PAGE_CATINFO)
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
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>Product Selection</button>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Shopping Cart({cart.length})</button>
      </header>
      {!isInputProductCost && inputProductCost(products)}
      {page === PAGE_PRODUCTS && <Products products={products} showCatInfo={showCatInfo} addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} totalcost={totalcost} removeFromCart={removeFromCart} emptyCart={emptyCart} />}
      {page === PAGE_PAYMENT && <Payment />}
      {page === PAGE_CATINFO && <CatInfo product={product} addToCart={addToCart} />}
    </div>
  );
};

export default App;

