import Button from '../Button/Button'
import './Hero.css'
const Hero = () => {
  return (
    <section className='Hero'>
        <div className="Principal">
            <h1 className='title'>SEGURANÇA E <br></br> CONFORTO  PARA <br></br>O SEU LAR</h1>
            <p className='text'>
            <span className='blur'></span>Confie na Kiko Instalações para <span className='blur'></span>
            cuidar do seu sistema <br></br>
            de gás com profissionalismo e comprometimento</p>
            <Button tipo='orcamento' texto='Solicite seu orçamento' />
        </div>
        <div className='NextSectionTitle'>
            <h2 className='subtitle'>O que a <span>Kiko Instalações oferece?</span></h2>
        </div>
    </section>
  )
}

export default Hero