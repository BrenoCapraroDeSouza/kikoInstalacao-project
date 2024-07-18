import './Depoiment.css';
import PropTypes from "prop-types";
const Depoiment = ({ type, perfilImg, author, text }) => {

  Depoiment.propTypes = {
    type: PropTypes.string.isRequired,
    perfilImg: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  return (
    <div className={`depoiment ${type}`}>
      <div className='topCard'>
        <img src={perfilImg} alt='Avatar Cliente' />
        <h5 className='depoimentAuthor'>{author}</h5>
      </div>
      <p className='regularP'>{text}</p>
    </div>
  );
};

export default Depoiment;
