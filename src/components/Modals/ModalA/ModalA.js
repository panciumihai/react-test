import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModalA = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      backdrop='static'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer className={'d-flex justify-content-between'}>
        <Form.Check type={'checkbox'} label={'Only even'} />
        <div>
          <Button className={'m-1'} onClick={props.onHide}>
            All Contacts
          </Button>
          <Button className={'m-1'} onClick={props.onHide}>
            US Contacts
          </Button>
          <Button className={'m-1'} onClick={props.onHide} variant='secondary'>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
