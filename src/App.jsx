import React, {useState, useEffect} from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

function App() {

  useEffect (() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  
  // shopping cart variable
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);


  const fetchItems = async () => {
    try {
      const data = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=6'
      );
      const items = await data.json();
      console.log(items);
      setItems(items);
    } catch (error) {
      console.log(error);
    }
  };
  
  const addToCart = (product) =>{
    console.log('we are in addToCart')
    setCart([...cart, product])
    console.log(`${cart}`)
  }

  const removeFromCart = (productToRemove) =>{
    setCart(
      cart.filter((product)=>product!==productToRemove)
    )
  }

  const navigateTo = (nextPage)=>{
    setPage(nextPage)
  }

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
    {/* Or use nav bar */}
    <header>
      <button onClick={()=> navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
      <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>
    </header>      
    {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
    {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart}/>}
    
    {/* Fetch data from API */}
      {/* 
    <div className='proudcts'>
      {items.map(data => (
          <img src={data.url} alt='cat' />
      ))}
      </div>
    </div> */}           

  </div> 
  
  );
};

export default App;

// Planning
//  App = () => {
//   return (
//   <div className="home-page">
//     <h1>Cat-Fisher</h1>
//     <h2>Picking the best partner for the job</h2>
//     <div>
//       <div className="home-image"></div>
//       <div className="pruducts">
//         <div>box1
//           <button className="Add"></button>
//         </div>
//         <div>box2
//         <button className="Add"></button>
//         </div>
//         <div>box3
//         <button className="Add"></button>
//         </div>
//         <div>box4
//         <button className="Add"></button>
//         </div>
//         <div>box5
//         <button className="Add"></button>
//         </div>
//         <div>box6
//         <button className="Add"></button>
//         </div>
//       </div>
//     </div>
//   </div>

//   )
// }
// const apiKey = `1ef81c01-f0b1-4971-9655-2017bd4c6bfc`;

// const url = `https://api.thecatapi.com/v1/images/search?limit=6`;