import { useState } from 'react';
import { ArrowDown2 } from '../../assets';
import './Doubt.css';
import PropTypes from "prop-types";

const Doubt = ({ question, answer }) => {
  Doubt.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };
  const [open, setOpen] = useState(false);
  return (
    <div className={`doubt ${open ? 'active' : ''} `}>
      <div className='topDoubt'>
        <h4 className='question'>{question}</h4>
        <img
          onClick={() => setOpen(!open)}
          className={`ArrowDown2 ${open ? 'click' : ''} `}
          src={ArrowDown2}
          alt='Icone seta'
        />
      </div>
      <p className='regularP'>{answer}</p>
    </div>
  );
};

export default Doubt;
