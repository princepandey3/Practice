import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router"


function App() {

  //now fetching the product api from backend

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await fetch('http://localhost:8080/api');
      const data = await result.json();
      setProduct(data.products);
    }
    fetchProduct()
  }, [])

  return (
    //fecthing the products
    <div>

      {product.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.stock}</p>
        </div>
      ))}
    </div>
  )
}

export default App
