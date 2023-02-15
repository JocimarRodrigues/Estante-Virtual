import React from "react";
import "./LivrosCadastrados.css";
import { useState } from "react";
import Modal from "../components/Modal";

const LivrosCadastrados = ({ titulo, imagem, sinopse }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
  };

  return (
    <section className="lista-livros">
      <div key={titulo} className="card-livro">
        <img
          src={imagem}
          alt={imagem}
          style={{ cursor: "pointer" }}
          onClick={abrirModal}
        ></img>
      </div>
      <div>
        <Modal
          mostrarModal={mostrarModal}
          fecharModal={fecharModal}
          imagem={imagem}
          titulo={titulo}
          sinopse={sinopse}
        />
      </div>
    </section>
  );
};

export default LivrosCadastrados;
