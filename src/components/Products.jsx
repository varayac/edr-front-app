import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const URI = 'http://localhost:8000/products/'

function Products() {
  // Show all products
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const res = await axios.get(URI)
    setProducts(res.data)
  }

  // Delete Product
  const deleteProduct = async id => {
    await axios.delete(`${URI}${id}`)
    getProducts()
  }

  return (
    <div>
      <h2>Products</h2>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link to={'/newProduct'} className='btn btn-primary mt-2 mb-2'>
              <i className='fa-solid fa-file-circle-plus'></i> New Product
            </Link>
            <table className='table table-dark'>
              <thead className='table-primary'>
                <tr>
                  <th>CODE</th>
                  <th>NAME</th>
                  <th>PRICE $USD</th>
                  <th>AMOUNT</th>
                  <th>CREATED AT</th>
                  <th>UPDATE AT</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map(item => (
                  <tr key={item.id}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link
                        to={`/editProduct/${item.id}`}
                        className='btn btn-info'
                      >
                        <i className='fa-solid fa-file-pen'></i>
                      </Link>
                      <button
                        onClick={() => {
                          deleteProduct(item.id)
                        }}
                        className='btn btn-danger'
                      >
                        <i className='fa-solid fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
