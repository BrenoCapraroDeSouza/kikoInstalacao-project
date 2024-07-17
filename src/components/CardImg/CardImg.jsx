import './CardImg.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';

const CardImg = ({ src, type, carousel }) => {
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
        {type === 'L' ? (
          <video src={src} alt='Video de um projeto' controls />
        ) : (
          <img src={src} alt='Imagem da ação' />
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
      >
        <div
          style={{
            width: 512,
            height: 512,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Carousel
            interval={5000}
            infiniteLoop
            dynamicHeight
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            {carousel
              .filter(image => image.type !== 'L')
              .map(image => (
                <div key={image.id}>
                  <img
                    width='100%'
                    height='100%'
                    style={{ objectFit: 'cover' }}
                    src={image.src}
                    alt='Imagem da ação'
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </Modal>
    </>
  );
};

export default CardImg;
