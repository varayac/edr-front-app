import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/providers/'

function EditProvider() {
  const [name, setName] = useState('')
  const [rut, setRut] = useState('')
  const [direction, setDirection] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  // Put Providers
  const updateProvider = async e => {
    e.preventDefault()
    await axios.put(URI + id, { rut, name, direction })
    navigate('/providers')
  }

  useEffect(() => {
    getProviderById()
  }, [])

  // Get Provider
  const getProviderById = async () => {
    const res = await axios.get(URI + id)
    setRut(res.data.rut)
    setName(res.data.name)
    setDirection(res.data.direction)
  }

  return (
    <Container>
      <div>
        <h2>Edit Provider</h2>
      </div>
      <Form onSubmit={updateProvider}>
        <Form.Group className='mb-3' controlId='formRut'>
          <Form.Label>RUT COMPANY</Form.Label>
          <Form.Control
            type='char'
            placeholder='Rut'
            value={rut}
            onChange={e => setRut(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>NAME COMPANY</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name Company'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formDirection'>
          <Form.Label>ADDRESS</Form.Label>
          <Form.Control
            type='text'
            placeholder='Direction'
            value={direction}
            onChange={e => setDirection(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' className='btn btn-primary'>
          Add Provider
        </Button>
      </Form>
    </Container>
  )
}

export default EditProvider
