import "./LivrosCadastrados.css";

const LivrosCadastrados = (props) => {
  console.log(props);
  return (
    <section className='lista-livros'>
      {props.livros.map((livro) => (
        <div key={livro.titulo}>
          <img src={livro.imagem}></img>
          <h1>{livro.titulo}</h1>   
        </div>
      ))}
    </section>
  );
};

export default LivrosCadastrados;
