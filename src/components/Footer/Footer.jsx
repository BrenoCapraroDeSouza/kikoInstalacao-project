import './Footer.css'
import {Doubts, Depoiments} from '../../components'
import { WhatsappIcon,InstagramIcon, logoPadrao } from '../../assets'
const Footer = () => {
  return (
    <section className='Footer'>
        <Depoiments/>
        <Doubts/>
        <div className="socialMedia">
          <img src={WhatsappIcon} alt="" />
          <img src={InstagramIcon} alt="" />
        </div>
        <p className='regularP'>Todos os direitos reservados a Kiko Instalações © 2024</p>
        <img className='LogoKiko' src={logoPadrao} alt="" />
    </section>
  )
}

export default Footer