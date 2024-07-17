import {
  instalacaoSmall1,
  instalacaoMedium1,
  instalacaoSmall2,
  instalacaoMedium2,
  instalacaoMedium3,
  instalacaoLarge,
} from '../../assets';
import Button from '../Button/Button';
import CardImg from '../CardImg/CardImg';
import './Projects.css';

const Projects = () => {
  const imgArray = [
    {
      id: 0,
      src: instalacaoSmall1,
      type: 'S',
    },
    {
      id: 1,
      src: instalacaoMedium1,
      type: 'M',
    },
    {
      id: 2,
      src: instalacaoSmall2,
      type: 'S',
    },
    {
      id: 3,
      src: instalacaoMedium2,
      type: 'M',
    },
    {
      id: 4,
      src: instalacaoMedium3,
      type: 'M',
    },
    {
      id: 5,
      src: instalacaoLarge,
      type: 'L',
    },
  ];

  return (
    <section className='Projects'>
      <h2 className='ProjectTitle'>PROJETOS EM AÇÃO</h2>
      <div className='gallery'>
        {imgArray.map(img => {
          return (
            <CardImg
              key={img.id}
              src={img.src}
              type={img.type}
              carousel={imgArray}
            />
          );
        })}
      </div>
      <Button tipo='projeto' texto='Faça seu projeto' />
    </section>
  );
};

export default Projects;
