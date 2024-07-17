import "./Footer.css";
import { Doubts, Depoiments } from "../../components";
import { WhatsappIcon, InstagramIcon, logoPadrao } from "../../assets";

const Footer = () => {
  const DEFAULT_PHONE = "5548935052079";
  return (
    <section className="Footer">
      <Depoiments />
      <Doubts />
      <div className="socialMedia">
        <button
          onClick={() => {
            window.open(
              `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(
                "Olá, estava olhando o site de vocês, e gostaria de tirar uma dúvida"
              )}`
            );
          }}
          type="whatsapp"
        >
          <img src={WhatsappIcon} alt="" />
        </button>
        <button
          onClick={() => {
            window.open("https://www.instagram.com/kikoinstalacoes/");
          }}
          type="instagram"
        >
          <img src={InstagramIcon} alt="" />
        </button>
      </div>
      <p className="regularP">
        Todos os direitos reservados a Kiko Instalações © 2024
      </p>
      <img className="LogoKiko" src={logoPadrao} alt="" />
    </section>
  );
};

export default Footer;
