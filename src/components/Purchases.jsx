import { Table, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
const URI = 'http://localhost:8000/purchases/'

function Purchases() {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    getPurchase()
  }, [])

  // Get purchases
  const getPurchase = async () => {
    const res = await axios.get(URI)
    setPurchases(res.data)
  }
  return (
    <Container>
      <div>
        <h2>Purchases</h2>
      </div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>ID Product</th>
            <th>ID Invoice</th>
            <th>CreatedAt</th>
            <th>Units</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.id_product}</td>
              <td>{item.id_invoice}</td>
              <td>{item.createdAt}</td>
              <td>{item.units}</td>
              <td>{item.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Purchases
