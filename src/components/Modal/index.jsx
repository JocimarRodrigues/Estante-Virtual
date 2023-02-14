import './Modal.css'
import React, { useState } from 'react'

const Modal = ({mostrarModal, titulo ,fecharModal, imagem, quantidade, preco, sinopse}) => {



  return (
    <>

    {mostrarModal && (

    <div className='modal-overlay'
    >
        <div className='modal-conteudo'
        >
            
        <div className='fechar'>
        <button onClick={fecharModal}>X</button>
        </div>
        <div className='modal-grid'>
        <img src={imagem}></img>
        <h1>{titulo}</h1>
        <h2>{quantidade}</h2>
        <h2></h2>
        <h4>{sinopse}</h4>
        </div>
        </div>
    </div>
    )}
    </>
  )
}

export default Modal;

/* const [mostrarModal, setMostrarModal] = useState(false);

const abrirModal = () => {
    setMostrarModal(true);
}

const fecharModal = () => {
    setMostrarModal(false);
} */