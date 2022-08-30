import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { connect } from 'react-redux';
import { fetchContacts, setOnlyEven, loadMoreContacts } from '../../../redux';
import { useEffect, useState } from 'react';
import ContactsList from '../../ContactsList/ContactsList';
import ModalC from '../ModalC/ModalC';

const ContactsModal = (props) => {
  const {
    countryId,
    title,
    onAllContactsClick,
    onUSContactsClick,
    onHide,
    show,
    contacts,
    fetchContacts,
    searchLoading,
    onlyEven,
    setOnlyEven,
    currentPage,
    loadMoreContacts,
    loadingMore,
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [firstFetch, setFirstFetch] = useState(true);

  const [showModalC, setShowModalC] = useState(false);
  const [clickedContact, setClickedContact] = useState(null);

  useEffect(() => {
    let delay = 1000;

    if (firstFetch) {
      delay = 0;
      setFirstFetch(false);
    }

    const delayDebounceFn = setTimeout(() => {
      const query = { countryId: countryId, query: searchValue };
      fetchContacts(query);
    }, delay);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, fetchContacts, countryId, firstFetch]);

  const searchHandler = () => {
    const query = { countryId: countryId, query: searchValue };
    fetchContacts(query);
  };

  const loadMoreHandler = () => {
    const query = {
      countryId: countryId,
      query: searchValue,
      page: currentPage + 1,
    };
    loadMoreContacts(query);
  };

  const contactClickHandler = (contact) => {
    setClickedContact(contact);
    setShowModalC(true);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size='md'
        aria-labelledby='contained-modal-title-vcenter '
        backdrop='static'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <Form.Control
              placeholder='Search contacts'
              aria-label='Search contacts'
              aria-describedby='basic-addon2'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => (e.key === 'Enter' ? searchHandler() : null)}
            />
            <Button
              variant='outline-primary'
              id='button-addon2'
              onClick={() => searchHandler()}
            >
              Search
            </Button>
          </InputGroup>
          <ContactsList
            contacts={contacts}
            onlyEven={onlyEven}
            onLoadMore={loadMoreHandler}
            loading={loadingMore || searchLoading}
            scrollToTop={searchLoading}
            onContactClick={contactClickHandler}
          />
        </Modal.Body>
        <Modal.Footer className={'d-flex justify-content-between'}>
          <Form.Check
            type={'checkbox'}
            label={'Only even'}
            checked={onlyEven}
            onChange={(e) => setOnlyEven(e.target.checked)}
          />
          <div>
            <Button className={'m-1'} onClick={onAllContactsClick}>
              All Contacts
            </Button>
            <Button
              className={'m-1'}
              onClick={onUSContactsClick}
              variant='secondary'
            >
              US Contacts
            </Button>
            <Button
              className={'m-1'}
              onClick={props.onHide}
              variant='outline-primary'
            >
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      {clickedContact && (
        <ModalC
          show={showModalC}
          onHide={() => setShowModalC(false)}
          contact={clickedContact}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  onlyEven: state.onlyEven,
  currentPage: state.currentPage,
  searchLoading: state.loadingContacts,
  loadingMore: state.loadingMore,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: (query) => dispatch(fetchContacts(query)),
  loadMoreContacts: (query) => dispatch(loadMoreContacts(query)),
  setOnlyEven: (value) => dispatch(setOnlyEven(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsModal);
