// Modal.js
import React from 'react';
import '../css/Modal.css'; // Ensure you have appropriate styles for the modal

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
