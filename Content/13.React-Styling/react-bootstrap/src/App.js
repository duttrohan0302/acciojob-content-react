import './App.css';
// Preferred
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapButton from './BootstrapButton';
import ReactBoostrapButton from './ReactBoostrapButton';
// Less Ideal
// import {Button} from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactBoostrapComponent from './ReactBootstrapComponents';
import { useState } from 'react';
import ModalComponent from './ModalComponent';

function App() {

  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(true);
  }
  const handleCloseModal = () => {
    setShow(false)
  }
  return (
    <div className="App">
      Basic App.js 
      <Button variant="primary" onClick={handleShowModal}>
        Launch Demo Modal
      </Button>
      <ModalComponent showModal={show} handleCloseModal={handleCloseModal} />
      <BootstrapButton />
      <ReactBoostrapButton />
      <AutoLayoutExample />
      <ReactBoostrapComponent />
    </div>
  );
}



function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
