import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

function ModalComponent({ showModal, handleCloseModal }) {
  console.log(showModal);
  const handleSaveChanges = () => {
    console.log("saving changes by calling an api");
    handleCloseModal()
  };
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}

    >
      <Modal.Header closeButton>
        <Modal.Title>Modal Heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
