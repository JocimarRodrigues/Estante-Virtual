
import Estante from "../components/Estante";
import "./LivrosCadastrados.css";

const LivrosCadastrados = (props) => {
  //console.log(props)
 // console.log(props.categorias)
  return (
    <section className='lista-livros'>
      { /*props.categorias.map((categoria) => <h1>{categoria.nome}</h1>) */}
      {props.livros.map((livro) => (
        <div key={livro.titulo} className='card-livro'>
          <h1>{livro.genero}</h1>
          <img src={livro.imagem} alt={livro.imagem}></img>
          <h1>{livro.titulo}</h1>
          <h1>{livro.quantidade}</h1>
          <h1>{livro.preco}</h1>         
        </div>
         
      ))}
      
    </section>
    
  );
};

export default LivrosCadastrados;
