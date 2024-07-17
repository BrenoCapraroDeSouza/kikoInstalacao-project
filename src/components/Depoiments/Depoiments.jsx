import {
  ElipseAna,
  ElipseBreno,
  ElipseCarlos,
  ElipseMaria,
} from '../../assets';
import './Depoiments.css';
import Depoiment from '../Depoiment/Depoiment';

const Depoiments = () => {
  const DepoimentsArray = [
    {
      id: 0,
      type: 'one',
      perfilImg: ElipseBreno,
      author: 'Breno Souza',
      text: '“A equipe foi pontual e realizou a manutenção de forma eficiente. Muito satisfeito com o serviço!”',
    },
    {
      id: 1,
      type: 'two',
      perfilImg: ElipseCarlos,
      author: 'Carlos Ferreira',
      text: '“Excelente serviço! A manutenção foi rápida e segura. Recomendo a todos.”',
    },
    {
      id: 2,
      type: 'one',
      perfilImg: ElipseAna,
      author: 'Ana Santos',
      text: '“Muito bom! A manutenção na rede de gás foi feita com profissionalismo e rapidez. Agradeço à equipe.”',
    },
    {
      id: 3,
      type: 'two',
      perfilImg: ElipseMaria,
      author: 'Maria Oliveira',
      text: '“Ótima experiência! A manutenção foi realizada sem problemas e a equipe foi muito atenciosa.”',
    },
  ];
  return (
    <section className='Depoiments'>
      <h2 className='DepoimentsTitle'>
        <span className='orange'>Experiências</span> de nossos{' '}
        <span className='orange'>CLIENTES</span>
      </h2>
      <div className='gallery-depoiments'>
        {DepoimentsArray.map(depoiment => {
          return (
            <Depoiment
              key={depoiment.id}
              type={depoiment.type}
              perfilImg={depoiment.perfilImg}
              author={depoiment.author}
              text={depoiment.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Depoiments;
