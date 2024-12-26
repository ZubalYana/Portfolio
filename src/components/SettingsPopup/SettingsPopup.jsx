import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const SettingsPopup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Settings Popup"
      style={{
        overlay: { 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        },
        content: { 
          padding: '20px', 
          borderRadius: '16px', 
          width: '650px', 
          height: '290px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Settings</h2>
      <p>Shared settings for both pages.</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default SettingsPopup;
