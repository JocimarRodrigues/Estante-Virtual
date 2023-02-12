import "./Formulario.css";
import CampoTexto from "../components/CampoTexto";
import Botao from "../components/Botao";
import { useState } from "react";


const Formulario = (props) => {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

 

  const cadastraLivro = (e) => {
    e.preventDefault();
    props.aoNovoLivroCadastrado({
      titulo,
      genero,
      imagem,
      quantidade,
      preco
    });
  };


  return (
    <section className="formulario">
      <form onSubmit={cadastraLivro}>
        <CampoTexto
          label="Titulo do livro"
          placeholder="Digite o titulo."
          valor={titulo}
          aoAlterado={(valor) => setTitulo(valor)}
        />
        <CampoTexto
          label="Genero"
          placeholder="Digite um gênero."
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="Quantidade"
          placeholder="Digite a quantidade disponível para venda."
          valor={quantidade}
          aoAlterado={(valor) => setQuantidade(parseInt(valor))}
        />

        <CampoTexto
          label="Preço"
          placeholder="Digite o preço por unidade"
          valor={preco}
          aoAlterado={(valor) => setPreco(parseInt(valor))}
        />
        <Botao>Criar Livro</Botao>
      </form>
     
    </section>
  );
};

export default Formulario;
