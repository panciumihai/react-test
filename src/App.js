import { useState } from 'react';
import styles from './App.module.scss';
import Button from 'react-bootstrap/Button';
import ModalA from './components/Modals/ModalA/ModalA';
import ModalB from './components/Modals/ModalB/ModalB';

function App() {
  const [modalAShow, setModalAShow] = useState(false);
  const [modalBShow, setModalBShow] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Button className={'m-1'} onClick={() => setModalAShow(true)}>
          Button A
        </Button>
        <Button className={'m-1'} onClick={() => setModalBShow(true)}>
          Button B
        </Button>
      </div>
      <ModalA show={modalAShow} onHide={() => setModalAShow(false)} />
      <ModalB show={modalBShow} onHide={() => setModalBShow(false)} />
    </>
  );
}

export default App;
