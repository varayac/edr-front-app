import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const URI = 'http://localhost:8000/products/'

function NewPruduct() {
  // Hook useState inputs
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')
  // Esta wea aún no la entiendo, queda pendiente xD
  const navigate = useNavigate()

  // POST products
  const productsParams = async e => {
    e.preventDefault()
    await axios.post(URI, {
      code: code,
      name: name,
      price: price,
      amount: amount,
      status: status,
    })
    navigate('/products')
  }

  return (
    <Form onSubmit={productsParams}>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Product name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formCode'>
        <Form.Label>Product code</Form.Label>
        <Form.Control
          type='text'
          placeholder='Code'
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <Form.Text className='text-muted'>Code or serial number</Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formPrice'>
        <Form.Label>Product Price($)</Form.Label>
        <Form.Control
          type='number'
          placeholder='Price'
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formAmount'>
        <Form.Label>Product Amount</Form.Label>
        <Form.Control
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formAvailable'>
        <Form.Label>Product Available</Form.Label>
        <Form.Select
          aria-label='Select Available'
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value='1'>Yes</option>
          <option value='0'>No</option>
        </Form.Select>
      </Form.Group>
      <Button type='submit' variant='success'>
        Add Product
      </Button>
    </Form>
  )
}

export default NewPruduct
