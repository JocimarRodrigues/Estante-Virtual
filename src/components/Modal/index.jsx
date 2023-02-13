import './Modal.css'

const Modal = ({titulo, quantidade, preco}) => {
    return (
        <div className='modal' id='modala'>
            <h1>{titulo}</h1>
            <h2>{quantidade}</h2>
            <h3>{preco}</h3>
        </div>
        
    )
}

export default Modal;