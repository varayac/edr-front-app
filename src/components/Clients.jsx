import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const URI = 'http://localhost:8000/clients/'

function Clients() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    getClients()
  }, [])

  // Get Clients
  const getClients = async () => {
    const res = await axios.get(URI)
    setClients(res.data)
  }

  // Delete client
  const deleteClient = async id => {
    await axios.delete(`${URI}${id}`)
    getClients()
  }

  return (
    <div>
      <h2>Clients</h2>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link to={'/newClient'} className='btn btn-primary mt-2 mb-2'>
              <i className='fa-solid fa-file-circle-plus'></i> New Client
            </Link>
            <table className='table table-dark'>
              <thead className='table-primary'>
                <tr>
                  <th>RUT</th>
                  <th>NAME</th>
                  <th>DIRECTION</th>
                  <th>CREATED AT</th>
                  <th>UPDATE AT</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(item => (
                  <tr key={item.id}>
                    <td>{item.rut}</td>
                    <td>{item.name}</td>
                    <td>{item.direction}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td>
                      <Link
                        to={`/editClient/${item.id}`}
                        className='btn btn-info'
                      >
                        <i className='fa-solid fa-file-pen'></i>
                      </Link>
                      <button
                        onClick={() => {
                          deleteClient(item.id)
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

export default Clients
