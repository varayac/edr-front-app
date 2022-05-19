import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
const URI = 'http://localhost:8000/products/'

function EditProduct() {
  // Hook useState inputs
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')
  // Router
  const navigate = useNavigate()
  const { id } = useParams()

  // Procedure for update
  const updateProduct = async e => {
    e.preventDefault()
    await axios.put(URI + id, {
      code: code,
      name: name,
      price: price,
      amount: amount,
      status: status,
    })
    navigate('/products')
  }

  useEffect(() => {
    getProductById()
  }, [])

  const getProductById = async () => {
    const res = await axios.get(URI + id)
    setCode(res.data.code)
    setName(res.data.name)
    setPrice(res.data.price)
    setAmount(res.data.amount)
    setStatus(res.data.status)
  }

  return (
    <Container>
      <div>
        <h2>Edit Product</h2>
      </div>
      <Form onSubmit={updateProduct}>
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
        <Button type='submit' className='btn btn-primary'>
          Add Product
        </Button>
      </Form>
    </Container>
  )
}

export default EditProduct
