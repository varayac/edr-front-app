import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const URI = 'http://localhost:8000/clients/'

function NewClient() {
  const [rut, setRut] = useState('')
  const [name, setName] = useState('')
  const [direction, setDirection] = useState('')
  const navigate = useNavigate()

  // POST Clients
  const clientsParams = async e => {
    e.preventDefault()
    await axios.post(URI, { rut: rut, name: name, direction: direction })
    navigate('/clients')
  }

  return (
    <div>
      <h2>Add new client</h2>

      <form onSubmit={clientsParams}>
        <div className='mb-3'>
          <label className='form-label'>RUT</label>
          <input
            value={rut}
            onChange={e => setRut(e.target.value)}
            type='char'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>NAME</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>DIRECTION</label>
          <input
            value={direction}
            onChange={e => setDirection(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-primary'>
            Add Client
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewClient
