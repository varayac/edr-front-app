import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Table, Button } from 'react-bootstrap'

const URI = 'http://localhost:8000/providers/'

function Providers() {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    getProviders()
  })

  // Get Providers
  const getProviders = async () => {
    const res = await axios.get(URI)
    setProviders(res.data)
  }

  // Delete Provider
  const deleteProvider = async id => {
    const res = await axios.delete(`${URI}${id}`)
    setProviders(res.data)
  }

  return (
    <Container>
      <div>
        <h2>Providers</h2>
        <Link to={'/newProvider'} className='btn btn-primary mt-2 mb-2'>
          <i className='fa-solid fa-file-circle-plus'></i> New Provider
        </Link>
      </div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>RUT</th>
            <th>COMPANY NAME</th>
            <th>DIRECTION</th>
            <th>CREATED AT</th>
            <th>UPDATE AT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {providers.map(item => (
            <tr key={item.id}>
              <td>{item.rut}</td>
              <td>{item.name}</td>
              <td>{item.direction}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
              <td>
                <Link to={`/editProvider/${item.id}`} className='btn btn-info'>
                  <i className='fa-solid fa-file-pen'></i>
                </Link>
                <Button
                  onClick={() => {
                    deleteProvider(item.id)
                  }}
                  className='btn btn-danger'
                >
                  <i className='fa-solid fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Providers
