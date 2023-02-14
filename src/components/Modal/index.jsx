import './Modal.css'
import React, { useState } from 'react'

const Modal = ({mostrarModal, titulo ,fecharModal, imagem}) => {



  return (
    <>

    {mostrarModal && (

    <div className='conteudo'
    >
        <div className='overlay'
        >
            
        <div className='fechar'>
        <button onClick={fecharModal}>X</button>
        </div>
        <img src={imagem}></img>
        <h1>{titulo}</h1>
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