import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const DEFAULT_PHONE = "5548935052079";
  const classMessages = {
    projeto:
      "Olá, gostaria de mais informações, estou construindo e preciso de um projeto.",
    orcamento:
      "Olá, gostaria de mais informações a respeito de orçamento para rede de gás/peças.",
    revenda: "Olá, gostaria de mais informações sobre os fogões e aquecedores.",
  };
  function redirectWhatsAppUrl() {
    const message =
      classMessages[props.tipo] || "Olá, gostaria de mais informações";
    window.open(
      `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
    );
  }

  return (
    <button onClick={redirectWhatsAppUrl} className={props.tipo}>
      {props.texto}
    </button>
  );
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
};

export default Button;
