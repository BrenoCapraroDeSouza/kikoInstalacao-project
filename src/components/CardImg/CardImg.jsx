import "./CardImg.css";
import { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";

import PropTypes from "prop-types";

const CardImg = ({ id, src, type, carousel }) => {
CardImg.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  carousel: PropTypes.array.isRequired,
};
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      backgroundColor: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImageID, setCurrentImage] = useState(0);

  const openModal = (currentImageID) => {
    document.querySelector("body").style.overflow = "hidden";
    setCurrentImage(currentImageID);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.querySelector("body").style.overflow = "auto";
  };

  Modal.setAppElement("#root");

  const classNames = {
    L: "gallery-itemG",
    S: "gallery-itemS",
    M: "gallery-itemM",
  };
  function generateClassByType(type) {
    return classNames[type] || classNames.S;
  }

  return (
    <>
      <div
        onClick={() => type !== "L" && openModal(id)}
        className={generateClassByType(type)}
      >
        {type === "L" ? (
          <video src={src} alt="Video de um projeto" controls />
        ) : (
          <img src={src} alt="Imagem da ação" />
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Carousel
            interval={5000}
            infiniteLoop
            dynamicHeight
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            selectedItem={currentImageID}
          >
            {carousel
              .filter((image) => image.type !== "L")
              .map((image) => (
                <div key={image.id}>
                  <img
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                    src={image.src}
                    alt="Imagem da ação"
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
