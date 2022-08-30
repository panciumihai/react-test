import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/index';
import Button from 'react-bootstrap/Button';
import ModalA from './components/Modals/ModalA/ModalA';
import ModalB from './components/Modals/ModalB/ModalB';

import styles from './App.module.scss';

function App() {
  const [modalAShow, setModalAShow] = useState(false);
  const [modalBShow, setModalBShow] = useState(false);

  return (
    <>
      <Provider store={store}>
        <div className={styles.container}>
          <Button className={'m-1'} onClick={() => setModalAShow(true)}>
            Button A
          </Button>
          <Button className={'m-1'} onClick={() => setModalBShow(true)}>
            Button B
          </Button>
        </div>
        {modalAShow && (
          <ModalA show={modalAShow} onHide={() => setModalAShow(false)} />
        )}
        {modalBShow && (
          <ModalB show={modalBShow} onHide={() => setModalBShow(false)} />
        )}
      </Provider>
    </>
  );
}

export default App;
