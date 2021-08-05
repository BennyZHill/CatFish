import React, {useState} from 'react'

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

const url = `https://api.thecatapi.com/v1/images/search`;

function App(){
  const [catUrl, setCatUrl]= useState(``);

 

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
        <button on onClick={getCat}>New cat</button>
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
    </div>
  </div>
</div>
 );


}



export default App;



