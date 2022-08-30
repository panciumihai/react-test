import { useEffect, useMemo, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Scrollbars from 'react-custom-scrollbars-2';
import { getContactsWithEvenId } from '../../utils/utils';

const ContactsList = (props) => {
  const {
    contacts,
    onlyEven = false,
    onLoadMore,
    loading,
    scrollToTop,
  } = props;

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollToTop) {
      scrollRef.current.scrollToTop();
    }
  }, [scrollToTop]);

  const filteredContacts = useMemo(() => {
    if (!onlyEven) return contacts;
    return getContactsWithEvenId(contacts);
  }, [contacts, onlyEven]);

  const contactClickHandler = (contactId) => {
    console.log(contactId);
  };

  const scrollFrameHandler = (values) => {
    if (values.top > 0.95 && !loading) {
      console.log('bottom scrolled');
      onLoadMore();
    }
  };

  return (
    <Scrollbars
      ref={scrollRef}
      style={{ height: '400px' }}
      className={'contact-list-container'}
      onScrollFrame={(values) => scrollFrameHandler(values)}
    >
      <ListGroup as='ol' className={'contact-list'}>
        {filteredContacts.map((contact) => (
          <ListGroup.Item
            key={contact.id}
            as='li'
            className='d-flex justify-content-between align-items-start overflow-hidden'
            action
            onClick={() => contactClickHandler(contact.id)}
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{contact.email}</div>
              Phone: {contact.phone_number}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {loading && (
        <div className='spinner-container'>
          <Spinner animation='border' variant='primary' />
        </div>
      )}
    </Scrollbars>
  );
};

export default ContactsList;
