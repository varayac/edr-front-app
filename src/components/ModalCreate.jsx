import { Modal, Button, Form } from 'react-bootstrap'

function ModalCreate(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Modal title
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formName'>
            <Form.Label>Product name</Form.Label>
            <Form.Control type='text' placeholder='Name' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formCode'>
            <Form.Label>Product code</Form.Label>
            <Form.Control type='text' placeholder='Code' />
            <Form.Text className='text-muted'>Code or serial number</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formPrice'>
            <Form.Label>Product Price($)</Form.Label>
            <Form.Control type='number' placeholder='Price' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formAmount'>
            <Form.Label>Product Amount</Form.Label>
            <Form.Control type='number' placeholder='Amount' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Close
        </Button>
        <Button variant='primary' onClick={props.onHide}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCreate
