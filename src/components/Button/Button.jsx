import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  return <button className={props.tipo}>{props.texto}</button>;
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
};

export default Button;
