import "./Formulario.css";
import CampoTexto from "../components/CampoTexto";
import Botao from "../components/Botao";
import { useState } from "react";
import ListaSuspensa from "../components/ListaSuspensa";
import Sinopse from "../components/Sinopse";

const Formulario = (props) => {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [sinopse, setSinopse] = useState("");

  const cadastraLivro = (e) => {
    e.preventDefault();
    props.aoNovoLivroCadastrado({
      titulo,
      genero,
      imagem,
      quantidade,
      preco,
      sinopse
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={cadastraLivro}>
        <CampoTexto
          obrigatorio={true}
          label="Titulo do livro"
          placeholder="Digite o titulo."
          valor={titulo}
          tipo={"string"}
          aoAlterado={(valor) => setTitulo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          tipo={"url"}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Generos Literários"
          itens={props.categorias}
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <Sinopse
        obrigatorio={true} 
        valor={sinopse}
        placeholder="Digite uma sinopse"
        aoAlterado={(valor) => setSinopse(valor)}
        />
        <Botao>Adicionar Livro</Botao>
      </form>
    </section>
  );
};

export default Formulario;
