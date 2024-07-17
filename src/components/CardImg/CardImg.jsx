import './CardImg.css';
import { useState } from 'react';
import Modal from 'react-modal';

const CardImg = ({ src, type }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: 'none',
      backgroundColor: 'transparent',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  Modal.setAppElement('#root');

  const classNames = {
    L: 'gallery-itemG',
    S: 'gallery-itemS',
    M: 'gallery-itemM',
  };
  function generateClassByType(type) {
    return classNames[type] || classNames.S;
  }

  return (
    <>
      <div
        onClick={type !== 'L' ? openModal : null}
        className={generateClassByType(type)}
      >
        {type == 'L' ? (
          <video src={src} alt='Video de um projeto' controls />
        ) : (
          <img src={src} alt='' />
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeModal} className='close'>
          X
        </button>
        <img src={src} alt='' />
      </Modal>
    </>
  );
};

export default CardImg;
