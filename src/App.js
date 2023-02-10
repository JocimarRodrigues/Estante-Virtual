import { useState } from "react";
import Banner from "./components/Banner";
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
      preco: 50,
      quantidade: 5,
    },
    {
      imagem: "/images/chika.png",
      titulo: "Harry Pottera",
      genero: "Fantasia-Medieval",
      preco: 50,
      quantidade: 5,
    },
    {
      imagem: "/images/chika1.png",
      titulo: "Harry Potterxcz",
      genero: "Fantasia-Medieval",
      preco: 50,
      quantidade: 5,
    },
  ];

  const [livrosAdicionados, setLivrosAdicionados] = useState([]);

  const AoNovoLivroAdicionado = (livro) => {
    console.log(livro)
    setLivrosAdicionados([
      ...livrosAdicionados, livro
    ])
  }

  return (
    <div className="App">
      <Banner />
      <LivrosCadastrados livros={livros} />
      <Formulario
      aoNovoLivroCadastrado={livro => AoNovoLivroAdicionado(livro)}
      />
    </div>
  );
}

export default App;
