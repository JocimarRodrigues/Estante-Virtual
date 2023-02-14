import { useState } from "react";
import LivrosCadastrados from "../../LivrosCadastrados";
import "./Estante.css";

const Estante = (props) => {
  //console.log(props.livrosCadastrados.genero)
  const [mostrarModal, setMostrarModal] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState({});

  const exibirModal = (livro) => {
    setLivroSelecionado(livro);
    setMostrarModal(true);
  };

  const ocultarModal = () => {
    setMostrarModal(false);
  };

  return (
    <section className="estante">
      {props.categorias.map((categoria) => (
        <div key={categoria.nome} className="lista">
          <h3>{categoria.nome}</h3>
          {props.livrosCadastrados.map(
            (livro) =>
              livro.genero === categoria.nome && (
                <LivrosCadastrados
                  titulo={livro.titulo}
                  imagem={livro.imagem}
                  genero={livro.genero}
                  sinopse={livro.sinopse}
                />
              )
          )}
        </div>
      ))}
    </section>
  );
};



export default Estante;

/* 
        {props.livrosCadastrados.map((livro) => (
          <LivrosCadastrados 
          titulo={livro.titulo}
          imagem={livro.imagem}
          genero={livro.genero}
          quantidade={livro.quantidade}
          preco={livro.preco}
          />
        ))}
*/
