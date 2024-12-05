import logo from './logo.svg';
import './App.css';
import Products from './product/Products';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import NavBar from './compnent/NavBar';

const App = () => {
  const [product, setProduct] = useState([]);
  const getData = () => {
    const url = "https://fakestoreapi.com/products"
    axios.get(url)
      .then(data => {
        setProduct(data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App row">
      <NavBar/>
      <button onClick={getData}>getData button</button>
      {
        product.map((p) => {
          return <Products name={p.name} image={p.image} description={p.description} />
        })
      }

    </div>
  )
}

export default App;
