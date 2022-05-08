import { Modal, Button } from 'react-bootstrap'

function ModalCreate(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Modal title
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
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
