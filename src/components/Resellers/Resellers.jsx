import {
  ProductLine,
  aquecedorBranco,
  aquecedorPreto,
  FogaoBranco,
  FogaoPreto,
} from '../../assets';
import Button from '../Button/Button';
import './Resellers.css';

const Resellers = () => {
  return (
    <section className='Resellers'>
      <h2 className='ResellersTitle'>
        Revendedores autorizados <span className='orange'>KOMECO</span> e{' '}
        <span className='orange'>FISCHER</span>
      </h2>
      <div className='resellersProducts'>
        <div className='aquecedores'>
          <h3>Aquecedores</h3>
          <p className='regularP'>
            Os aquecedores KOMECO são sinônimos de qualidade e inovação.
            Projetados para oferecer conforto térmico com alta eficiência
            energética, eles contam com tecnologia de ponta, segurança avançada
            e design moderno. Ideais para residências e comércios, os
            aquecedores KOMECO garantem água quente de maneira rápida e
            econômica, respeitando o meio ambiente. Confie na KOMECO para seu
            bem-estar diário.
          </p>
          <div className='aquecedoresImg'>
            <img src={aquecedorPreto} alt='' />
            <img src={aquecedorBranco} alt='' />
          </div>
        </div>
        <div className='line'>
          <img src={ProductLine} alt='' />
        </div>
        <div className='fogoes'>
          <h3>Fogões</h3>
          <p className='regularP'>
            Os fogões Fischer combinam inovação, durabilidade e design
            sofisticado. Desenvolvidos para proporcionar uma experiência
            culinária superior, eles oferecem alta performance com precisão e
            segurança. Com uma ampla gama de modelos, os fogões Fischer atendem
            a diferentes necessidades e estilos, garantindo praticidade e
            eficiência no preparo de suas receitas favoritas. Escolha Fischer e
            transforme sua cozinha com qualidade e elegância.
          </p>
          <div className='fogoesImg'>
            <img id='fogaoBranco' src={FogaoBranco} alt='' />
            <img src={FogaoPreto} alt='' />
          </div>
        </div>
      </div>
      <Button tipo='projeto' texto='Peça Já o seu' />
    </section>
  );
};

export default Resellers;
