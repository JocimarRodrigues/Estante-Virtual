import './NovosLivros.css';

const NovosLivros = ({nome, genero, imagem, quantidade, preco}) => {
    return (
        <div className='novosLivros'>
            <div>
                <h1>{nome}</h1>
                <h2>{genero}</h2>
                <h3>{imagem}</h3>
            </div>
        </div>
    )
}

export default NovosLivros;