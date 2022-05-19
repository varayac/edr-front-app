import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
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

  return (
    <Container>
      <h1>Providers</h1>
    </Container>
  )
}

export default Providers
