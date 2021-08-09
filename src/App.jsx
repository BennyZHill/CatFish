import React,{useState, useEffect} from 'react'
import './App.css'

function App() {
  useEffect (() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=6'
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };
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
);

};

export default App

