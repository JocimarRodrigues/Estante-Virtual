import "./LivrosCadastrados.css";

const LivrosCadastrados = (props) => {
  console.log(props);
  return (
    <section>
      {props.livros.map((livro) => (
        <div key={livro.titulo} className='lista-livros'>
          <h1>{livro.titulo}</h1>
          <img src={livro.imagem}></img>
        </div>
      ))}
    </section>
  );
};

export default LivrosCadastrados;
