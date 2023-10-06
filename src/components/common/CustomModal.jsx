
import React, { useState } from 'react';
import Modal from 'react-modal';
const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '300px', // Adjust the width as needed
      padding: '20px',
      textAlign: 'center',
    },
  };
  
const CustomModal = ({ isOpen, onRequestClose, modalTitle, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={modalTitle}
      style={modalStyles}

    >
      <h2>{modalTitle}</h2>
      <p>{content}</p>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;
