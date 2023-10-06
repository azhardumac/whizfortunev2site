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
      maxWidth: '400px', // Adjust the width as needed
      padding: '05px',
      textAlign: 'center',
      border: '2px solid #FFFFF', // Add a border to the modal
       // Mobile styles
    '@media (max-width: 768px)': {
        width: '90%', // Adjust the width for mobile
        padding: '10px', // Adjust padding for mobile
        // Add other mobile-specific styles here
      },

    },
  };
  
  const formStyles = {
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column', // Stack form fields vertically
    alignItems: 'center', // Center align form fields horizontally
    background: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
    padding: '20px',
    border: '1px solid #ccc', // Add a border around the form
    borderRadius: '5px', // Add rounded corners
    '@media (max-width: 768px)': {
        padding: '10px', // Adjust padding for mobile
        // Add other mobile-specific styles here
      },
      
  };
  
  const inputStyles = {
    marginBottom: '10px',
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  
  const buttonStyles = {
    marginTop: '10px',
    padding: '15px 30px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

const CustomModal = ({ isOpen, onRequestClose, modalTitle,formContent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted with data:', formData);
    onRequestClose();
  };

  
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel={modalTitle}
          style={modalStyles}
        >
          <h2>{modalTitle}</h2>
          <form style={formStyles}>
  <div className="form-group">
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
    />
  </div>
  <div className="form-group">
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
    />
  </div>
  <div className="form-group">
    <textarea
      id="message"
      name="message"
      rows="3"
      value={formData.message}
      onChange={handleChange}
      placeholder="Enter your message"
    ></textarea>
  </div>
  <button style={buttonStyles} onClick={handleSubmit}>
    Submit
  </button>
</form>
          <button className="close-button" onClick={onRequestClose}>
            <span>X</span>          </button>
        </Modal>
      );
      
  
};

export default CustomModal;
