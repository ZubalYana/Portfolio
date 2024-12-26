import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './SettingsPopup.css';
import gear1 from '/gear1.svg';
import gear2 from '/gear2.svg';
import gear3 from '/gear3.svg';
import gear4 from '/gear4.svg';
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
          width: '600px', 
          height: '290px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#1F1F1F',
          overflow: 'hidden',
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
      <img src={gear1} alt="gear1" className='absolute bottom-[-20%] right-[-10%]' />
      <img src={gear2} alt="gear2" className='absolute bottom-[-10%] left-[61%]' />
      <img src={gear3} alt="gear3" className='absolute top-[-15%] left-[45%]' />
      <img src={gear4} alt="gear4" className='absolute bottom-[-8%] left-[5%]' />
    </Modal>
  );
};

export default SettingsPopup;
