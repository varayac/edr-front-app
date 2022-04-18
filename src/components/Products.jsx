import { useState, useEffect } from 'react'
import axios from 'axios'

function Products() {
  const API = 'http://localhost:8000/products/1'
  const [rut, setRut] = useState([])

  useEffect(() => {
    axios.get(API).then(res => {
      setRut(res.data.code)
    })
  }, [])
  return (
    <div>
      <h2>Products</h2>
      <p>{rut}</p>
    </div>
  )
}

export default Products
