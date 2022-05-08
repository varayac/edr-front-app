import { useState } from 'react'
import ModalCreate from './ModalCreate'

function Products() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)

  return (
    <div>
      <h2>Products</h2>
      <button className='btn btn-success' onClick={handleOpen}>
        Modal Create
      </button>

      <ModalCreate show={show} onHide={handleClose} />
    </div>
  )
}

export default Products
