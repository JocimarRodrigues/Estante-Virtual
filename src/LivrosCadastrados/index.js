
import Estante from "../components/Estante";
import "./LivrosCadastrados.css";

const LivrosCadastrados = ({titulo, imagem, genero, quantidade, preco}) => {
  //console.log(props)
 // console.log(props.categorias)
  return (
    <section className='lista-livros'>
        <div key={titulo} className='card-livro'>
          <h1>{genero}</h1>
          <img src={imagem} alt={imagem}></img>
          <h1>{titulo}</h1>
          <h1>{quantidade}</h1>
          <h1>{preco}</h1>         
        </div>
         
      
    </section>
    
  );
};

export default LivrosCadastrados;
