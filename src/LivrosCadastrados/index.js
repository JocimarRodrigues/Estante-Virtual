
import Estante from "../components/Estante";
import "./LivrosCadastrados.css";
import { useState } from "react";
import Modal from "../components/Modal";



const LivrosCadastrados = ({titulo, imagem, genero, quantidade, preco, modal}) => {
  //console.log(props)
 // console.log(props.categorias)

  const mostrarModal = () => {
    let modal = document.getElementById('modala')
    modal.style.display = 'flex'
  }
  

  return (
    <section className='lista-livros'>
        <div key={titulo} className='card-livro'>
          <h1>{genero}</h1>
          <img src={imagem} alt={imagem} style={{cursor: 'pointer'}} onClick={mostrarModal}></img>
          <h1>{titulo}</h1>
          <h1 id="h21">{quantidade}</h1>
          <h1>{preco}</h1>         
        </div>
        <div className="modal" id='modala'>
          <Modal 
          titulo={titulo}
          quantidade={quantidade}
          preco={preco}/>
        </div>
    </section>
  );

};

export default LivrosCadastrados;
