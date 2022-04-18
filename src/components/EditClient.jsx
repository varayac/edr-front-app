import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const URI = 'http://localhost:8000/clients/'

function EditClient() {
  // Hooks
  const [rut, setRut] = useState('')
  const [name, setName] = useState('')
  const [direction, setDirection] = useState('')
  const navigate = useNavigate()
  // usamos el registro mediante el ID
  const { id } = useParams()

  // Procedure for update
  const updateClient = async e => {
    e.preventDefault()
    await axios.put(URI + id, {
      rut: rut,
      name: name,
      direction: direction,
    })
    navigate('/clients')
  }

  useEffect(() => {
    getClientById()
  }, [])

  const getClientById = async () => {
    const res = await axios.get(URI + id)
    setRut(res.data.rut)
    setName(res.data.name)
    setDirection(res.data.direction)
  }

  return (
    <div>
      <h2>Edit Client</h2>

      <form onSubmit={updateClient}>
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
            Edit Client
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditClient
