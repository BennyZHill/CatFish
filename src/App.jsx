import React, {useState, useEffect} from 'react'

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

const url = `https://api.thecatapi.com/v1/images/search?limit=6`;

function App(){
  const [catUrl, setCatUrl]= useState(``);

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

  const getCat = () => {
    console.log(`hello World`);
    fetch(url)
    .then((res)=>res.json())
    .then((cats)=>{
      console.log(`Cats: `, cats);
      const catUrl = cats[0].url;

      setCatUrl(catUrl);
    })
    .catch((error)=>{
      console.log(`Error: `, error);
    });
  }
  console.log(`Cat URL: `, catUrl);

 return(
  <div className="home-page">
  <h1>Cat-Fisher</h1>
  <h2>Picking the best partner for the job</h2>
  <div>
    <div className="home-image"></div>
    <div className="products">
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
      </div>

      <div className="App">
          {catItems.map(item =>(
            <div key={item.id}>
              <img src={item.url} alt="{item.name}"/>
              <button className="Add">Add</button>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>
 );


}



export default App;



