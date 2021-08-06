import React, {useState, useEffect, useStatediv} from 'react'
import './App.css'

function App() {

  useEffect (() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  
  // shopping cart variable
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');
  const [products, setProducts] = useState([
    {
      id: 'abys',
      name: 'Abyssinian',
      image: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      description: 'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
      temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
      child_friendly: '3',
      dog_friendly: '4',
      energy_level:'5',
      wikipedia_url:'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
      cost:'£200' //defined data

    },
    {
      id: 'aege',
      name: 'Aegean',
      image: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg',
      description: 'Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.',
      temperament: 'Affectionate, Social, Intelligent, Playful, Active',
      child_friendly: '4',
      dog_friendly: '4',
      energy_level:'3',
      wikipedia_url:'https://en.wikipedia.org/wiki/Aegean_cat',
      cost:'£150' //defined data
    },
    {
      id: 'abob',
      name: 'American Bobtail',
      image: 'https://cdn2.thecatapi.com/images/hBXicehMA.jpg',
      description: 'American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.',
      temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive',
      child_friendly: '4',
      dog_friendly: '5',
      energy_level:'3',
      wikipedia_url:'https://en.wikipedia.org/wiki/American_Bobtail',
      cost:'£250' //defined data

    },
    {
      id: 'acur',
      name: 'American Curl',
      image: 'https://cdn2.thecatapi.com/images/xnsqonbjW.jpg',
      description: 'Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.',
      temperament: 'Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social',
      child_friendly: '4',
      dog_friendly: '5',
      energy_level:'3',
      wikipedia_url:'https://en.wikipedia.org/wiki/American_Curl',
      cost:'£300' //defined data
    },
    {
      id: 'asho',
      name: 'American Shorthair',
      image: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg',
      description: 'The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.',
      temperament: 'Active, Curious, Easy Going, Playful, Calm',
      child_friendly: '4',
      dog_friendly: '5',
      energy_level:'3',
      wikipedia_url:'https://en.wikipedia.org/wiki/American_Shorthair',
      cost:'£150' //defined data

    },
    {
      id: 'awir',
      name: 'American Wirehair',
      image: 'https://cdn2.thecatapi.com/images/8D--jCd21.jpg',
      description: 'The American Wirehair tends to be a calm and tolerant cat who takes life as it comes. His favorite hobby is bird-watching from a sunny windowsill, and his hunting ability will stand you in good stead if insects enter the house.',
      temperament: 'Affectionate, Curious, Gentle, Intelligent, Interactive, Lively, Loyal, Playful, Sensible, Social',
      child_friendly: '4',
      dog_friendly: '5',
      energy_level:'3',
      wikipedia_url:'https://en.wikipedia.org/wiki/American_Wirehair',
      cost:'£200' //defined data
    }
  ])

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

  const renderProducts = () =>(
          <>
           <h1>Cat-Fisher</h1>
           <h2>Picking the best partner for the job</h2>
           <div className="products">
            {products.map((product, idx) =>(
              <div className="product" key={idx}>
                <img src={product.image} alt={product.id} height='200px' width='200px'/>
                <h3>{product.cost}</h3>
                <button onClick={()=>addToCart(setProducts)}>
                  Add to Cart
                  </button>
              </div>
            ))}
            </div>
            </>

 )

  const addToCart = (product) =>{
    console.log('we are in addToCart')
    setCart([...cart, product])
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
  <div className='proudcts'>
    {items.map(data => (
        <img src={data.url} alt='cat' />
    ))}
    </div>
  </div>

    
    // <div className="wrapper">
    //   <header>
    //     {/* Use Nav Bar later */}
    //     <button>Go to Cart</button>
    //   </header>
    //   {page === 'products' && renderProducts()}
      
    //   <div className='bubbles'>
    //     {items.map(data => (
    //         <img src={data.url} alt='cat' />
    //     ))}     
    //   </div>

    // </div>
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

<<<<<<< HEAD
<<<<<<< HEAD
const url = `https://api.thecatapi.com/v1/images/search?limit=6`;

function App(){
  // const [catUrl, setCatUrl]= useState(``);

  //add by Pui at 2021/08/05 3:30pm
  const [catItems, setCatItems] = useState([]); 
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState();

  //add by Pui at 2021/08/05 3:57pm
  useEffect(() =>  {
    //getCat()
    getRead()
  }, [])

  const getRead = async() =>{
    try {
    //const response  = await fetch('https://api.thecatapi.com/v1/breeds')
    const response  = await fetch('https://api.thecatapi.com/v1/images/search?limit=6')
    const data = await response.json()
      setLoaded(true)
      setCatItems(data)

    } catch (error) {
      setError(true);
      console.log(error);
    }

  }

  // const getCat = () => {
  //   console.log(`hello World`);
  //   fetch(url)
  //   .then((res)=>res.json())
  //   .then((cats)=>{
  //     console.log(`Cats: `, cats);
  //     const catUrl = cats[0].url;

  //     setCatUrl(catUrl);
  //   })
  //   .catch((error)=>{
  //     console.log(`Error: `, error);
  //   });
  // }
  // console.log(`Cat URL: `, catUrl);

 return(
  <div className="home-page">
  <h1>Cat-Fisher</h1>
  <h2>Picking the best partner for the job</h2>
  <div>
    <div className="home-image"></div>
    {/* <div className="products">
      <div><img src={catUrl} alt=""/>
        <button onClick={getCat}>New cat</button>
        <button className="Add"></button>
      </div> 
      <div>box2
      <button className="Add"></button>
      </div>
      <div>box3
      <button className="Add"></button>
      </div>
      <div>box4
      <button className="Add"></button>
      </div>
      <div>box5
      <button className="Add"></button>
      </div>
      <div>box6
      <button className="Add"></button>
      </div> */}

      <div className="App">
          {catItems.map(item =>(
            <div key={item.id}>
              <img src={item.url} alt="{item.name}"/>
              <button className="Add">Add</button>
            </div>
          ))}
      </div>
      <div className="App">
        <ul>
          {catItems.map(item =>(
            <li key={item.id}>
              Name: {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
// </div>
 );


}
  


export default App;
=======
=======
>>>>>>> 0d674966b4fcf5f4b5560d30a5c3c1ad731119f8
// const url = `https://api.thecatapi.com/v1/images/search?limit=6`;



>>>>>>> 87f242afb42ab5f68ab2ae78a8fcd48eb03a4abd
