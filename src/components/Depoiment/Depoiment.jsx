import './Depoiment.css'

const Depoiment = ({type, perfilImg, author, text}) => {
  return (
    <div className={`depoiment ${type}`}>
        <div className="topCard">
            <img src={perfilImg} alt="Avatar Cliente" />
            <h5 className="depoimentAuthor">{author}</h5>
        </div>
        <p className="regularP">{text}</p>
    </div>
  )
}

export default Depoiment