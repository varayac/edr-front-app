import { Modal, Button } from 'react-bootstrap'
import NewPruduct from './NewProduct'

function ModalCreate(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='modal-title'>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <NewPruduct />
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCreate
