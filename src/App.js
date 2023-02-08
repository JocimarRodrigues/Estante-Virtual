import "./App.css";
import Banner from "./components/Banner";
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
  ];

  return (
    <div className="App">
      <Banner />
      <LivrosCadastrados  livros={livros}/>
    </div>
  );
}

export default App;
