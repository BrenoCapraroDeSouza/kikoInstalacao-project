import { Arrow } from '../../assets';
import './Info.css';

const Info = () => {
  return (
    <section className='Info'>
      <img src={Arrow} className='Arrow' />
      <div className='Infotext'>
        <p className='regularP'>
          Na Kiko Gás oferecemos serviços especializados em instalações de redes
          de gás, garantindo segurança e eficiência em cada projeto. Não apenas
          entregamos serviços de qualidade, mas também proporcionamos
          tranquilidade pós-serviço. Nosso compromisso é garantir que sua
          jornada conosco seja perfeita do início ao fim. Se surgir qualquer
          dúvida ou necessidade após a instalação, nossa equipe estará sempre
          pronta para ajudar.
        </p>
        <p className='regularP'>
          Não nos limitamos apenas às instalações de redes de gás. Oferecemos
          também a venda e manutenção de fogões e aquecedores, garantindo a
          segurança e eficiência dos seus equipamentos. Confie em nós para todas
          as suas necessidades de gás e aquecimento!
        </p>
      </div>
    </section>
  );
};

export default Info;
