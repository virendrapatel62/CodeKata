import React from "react";
import Modal from "react-bootstrap/Modal";

function MyAppModal({ show, onHide, children, title }) {
  return (
    <Modal show={show} fullscreen onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export { MyAppModal };
