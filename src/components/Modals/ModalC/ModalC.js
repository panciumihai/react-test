import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { getContactName } from '../../../utils/utils';

const ModalC = (props) => {
  const { contact, show, onHide } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter '
      backdrop={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {'Contact Info'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as='ol'>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start overflow-hidden'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{'ID'}</div>
              {contact.id}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start overflow-hidden'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{'Full Name'}</div>
              {getContactName(contact)}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start overflow-hidden'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{'Email'}</div>
              {contact.email ? contact.email : '-'}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start overflow-hidden'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{'Phone Number'}</div>
              {contact.phone_number ? contact.phone_number : '-'}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start overflow-hidden'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{'Full Phone Number'}</div>
              {contact.full_phone_number ? contact.full_phone_number : '-'}
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default ModalC;
