import React from "react";
import Estante from "../components/Estante";
import "./LivrosCadastrados.css";
import { useState } from "react";
import Modal from "../components/Modal";







const LivrosCadastrados = ({titulo, imagem, genero, quantidade, preco, modal}) => {
  //console.log(props)
 // console.log(props.categorias)
 const [mostrarModal, setMostrarModal] = useState(false);

 const abrirModal = () => {
     setMostrarModal(true);
 }
 
 const fecharModal = () => {
  setMostrarModal(false)
 }




  
  return (
    <section className='lista-livros'>
        <div key={titulo} className='card-livro'>
          <h1>{genero}</h1>
          <img src={imagem} alt={imagem} style={{cursor: 'pointer'}} onClick={abrirModal}></img>
          <h1>{titulo}</h1>
          <h1 id="h21">{quantidade}</h1>
          <h1>{preco}</h1>         
        </div>
        <div>
        <Modal 
        mostrarModal={mostrarModal} 
        fecharModal={fecharModal}
        imagem={imagem}
        titulo={titulo}
        />
    </div>
    </section>
  );

};

export default LivrosCadastrados;
