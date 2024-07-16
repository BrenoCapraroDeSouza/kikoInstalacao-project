import './Doubts.css'
import Doubt from '../Doubt/Doubt'

const Doubts = () => {
  const DoubtsArray = [
    {
      id: 0,
      question: 'De quanto em quanto tempo tenho que trocar as mangueiras e válvulas?',
      answer: 'As mangueiras e válvulas devem ser substituídas regularmente de acordo com o prazo de validade indicado pelos fabricantes, geralmente a cada 5 anos. Esta prática é essencial para garantir o funcionamento seguro e eficiente, prevenindo falhas decorrentes do desgaste natural dos materiais ao longo do tempo. Inspeções regulares também são recomendadas para identificar sinais de desgaste antecipado ou danos.'
    },
    {
      id: 1,
      question: 'Minhas panelas começaram a ficar pretas, qual pode ser o motivo?',
      answer: 'A coloração preta nas panelas pode ser devido a uma regulagem inadequada do fogão, que pode levar à combustão incompleta do gás. Isso resulta na liberação de fuligem, que se deposita nas panelas. Esse problema não está diretamente relacionado ao tipo de gás utilizado, como o GLP (gás liquefeito de petróleo), mas sim à maneira como o fogão está queimando o combustível.'
      
    },
    {
      id: 2,
      question: 'Por que meu fogão faz um barulho estranho quando está ligado?',
      answer: 'O barulho estranho que seu fogão faz quando está ligado pode ser devido a diversas razões, como o acúmulo de sujeira nos queimadores, ajustes incorretos na regulagem do gás, ou peças soltas dentro do fogão. Esse problema não está relacionado diretamente ao tipo de gás utilizado, como o GLP (gás liquefeito de petróleo), mas sim a questões internas do fogão que podem exigir manutenção ou ajustes para resolver o barulho incômodo.'
    },
    {
      id: 3,
      question: 'O botijão de gás está começando a congelar, o que fazer?',
      answer: 'o congelamento é resultado de um desequilíbrio entre a demanda de gás e a capacidade do botijão de fornecer gás na forma evaporada, levando ao resfriamento extremo da superfície do botijão. Isso ocorre porque, à medida que o gás liquefeito (GLP) dentro do botijão se transforma em gás para ser consumido, ele precisa absorver calor do ambiente.'
    }
  ]
  return (
    <section className='Doubts'>
        <h2 className='DoubtsTitle'>DÚVIDAS Frequentes</h2>
        <div className="gallery-doubts">
            {DoubtsArray.map((doubt) => {
              return <Doubt key={doubt.id} question={doubt.question} answer={doubt.answer}/>
            })}
        </div>
    </section>
  )
}




export default Doubts