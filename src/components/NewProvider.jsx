import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

const URI = 'http://localhost:8000/providers/'

function NewProvider() {
  const [rut, setRut] = useState('')
  const [name, setName] = useState('')
  const [direction, setDirection] = useState('')
  const navigate = useNavigate()

  // Post Provider
  const providerParams = async e => {
    e.preventDefault()
    await axios.post(URI, {
      rut,
      name,
      direction,
    })
    navigate('/providers')
  }

  return (
    <Container>
      <div>
        <h2>New Provider</h2>
      </div>

      <Form onSubmit={providerParams}>
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
          Add Product
        </Button>
      </Form>
    </Container>
  )
}

export default NewProvider
