import LivrosCadastrados from "../../LivrosCadastrados";
import "./Estante.css";

const Estante = (props) => {
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
                  key={livro.titulo}
                />
              )
          )}
        </div>
      ))}
    </section>
  );
};

export default Estante;
