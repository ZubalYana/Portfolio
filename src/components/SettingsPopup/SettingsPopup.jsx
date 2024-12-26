import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './SettingsPopup.css';
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
          padding: '25px', 
          borderRadius: '16px', 
          width: '650px', 
          height: '290px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#1F1F1F',
        },
      }}
    >
      <FontAwesomeIcon icon={faXmark} className="closeButton absolute top-[25px] right-[25px] cursor-pointer" onClick={onClose} size="2x" />
      <h2 className='popupTitle text-4xl font-normal mb-4'>{'<Settings/>'}</h2>
      <div className="settingGroup flex mb-3">
        <p className='font-light text-xl mr-1'>Page language:</p>
        <select id="language" className='font-medium text-xl'>
          <option value="en" selected>Eng.</option>
          <option value="ua">Укр.</option>
          <option value="fr">Fr.</option>
          <option value="es">Esp.</option>
          <option value="it">It.</option>
        </select>
      </div>
      <div className="settingGroup flex">
        <p className='font-light text-xl mr-1'>Page theme:</p>
        <p className='font-medium text-xl cursor-pointer'>dark ( default )</p>
      </div>
    </Modal>
  );
};

export default SettingsPopup;
