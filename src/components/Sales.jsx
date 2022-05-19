import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
const URI = 'http://localhost:8000/sales/'

function Sales() {
  const [sales, setSales] = useState([])
  useEffect(() => {
    getSales()
  }, [])

  const getSales = async () => {
    const res = await axios.get(URI)
    setSales(res.data)
  }

  return (
    <Container>
      <div>
        <h2>Sales</h2>
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
          {sales.map(item => (
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

export default Sales
