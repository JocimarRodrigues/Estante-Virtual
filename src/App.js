import { useState } from "react";
import Banner from "./components/Banner";
import Estante from "./components/Estante";
import Formulario from "./Formulario";
import LivrosCadastrados from "./LivrosCadastrados";

function App() {
  let livros = [
    {
      imagem: "/images/chika.png",
      titulo: "Senhor dos Anéis",
      genero: "Fantasia-Medieval",
      preco: 50,
      quantidade: 5,
    },
    {
      imagem: "/images/chika1.png",
      titulo: "Harry Potter",
      genero: "Fantasia-Medieval",
      preco: 23,
      quantidade: 5,
    },
    {
      imagem: "/images/chika.png",
      titulo: "Harry Pottera",
      genero: "Fantasia-Medieval",
      preco: 40,
      quantidade: 5,
    },
    {
      imagem: "/images/chika1.png",
      titulo: "Harry Potterxcz",
      genero: "Fantasia-Medieval",
      preco: 10,
      quantidade: 5,
    },
  ];

  const [livrosAdicionados, setLivrosAdicionados] = useState(livros);

  const AoNovoLivroAdicionado = (livro) => {
    console.log(livrosAdicionados)
    setLivrosAdicionados([
      ...livrosAdicionados, livro
    ])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
      aoNovoLivroCadastrado={livro => AoNovoLivroAdicionado(livro)}
      />
      {livros.map(livro => <Estante 
      key={livro.titulo} 
      imagem={livro.imagem}
      titulo={livro.titulo}
      genero={livro.genero}
      preco={livro.preco}
      quantidade={livro.quantidade}
       />)}
       <LivrosCadastrados  livros={livrosAdicionados}/>
    </div>
  );
}

export default App;
