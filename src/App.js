import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/index';
import Button from 'react-bootstrap/Button';
import ModalA from './components/Modals/ModalA/ModalA';
import ModalB from './components/Modals/ModalB/ModalB';

import styles from './App.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const [modalAShow, setModalAShow] = useState(false);
  const [modalBShow, setModalBShow] = useState(false);

  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#ModalA') setModalAShow(true);
    else setModalAShow(false);
    if (hash === '#ModalB') setModalBShow(true);
    else setModalBShow(false);
  }, [hash]);

  const showModalAHandler = () => {
    navigate({ hash: 'ModalA' });
  };

  const showModalBHandler = () => {
    navigate({ hash: 'ModalB' });
  };

  const hideModals = () => {
    navigate({ hash: '' });
  };

  return (
    <>
      <Provider store={store}>
        <div className={styles.container}>
          <Button className={'m-1'} onClick={showModalAHandler}>
            Button A
          </Button>
          <Button
            variant='secondary'
            className={'m-1'}
            onClick={showModalBHandler}
          >
            Button B
          </Button>
        </div>
        {modalAShow && (
          <ModalA
            show={modalAShow}
            onHide={hideModals}
            onAllContactsClick={showModalAHandler}
            onUSContactsClick={showModalBHandler}
          />
        )}
        {modalBShow && (
          <ModalB
            show={modalBShow}
            onHide={hideModals}
            onAllContactsClick={showModalAHandler}
            onUSContactsClick={showModalBHandler}
          />
        )}
      </Provider>
    </>
  );
}

export default App;
