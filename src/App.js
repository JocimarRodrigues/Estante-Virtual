import { useState } from "react";
import Banner from "./components/Banner";
import Estante from "./components/Estante";
import Formulario from "./Formulario";

function App() {
  let livros = [
    {
      imagem: "/images/ONomeDoVento.png",
      titulo: "O nome do vento",
      genero: "Fantasia",
      sinopse:
        "Da infância numa trupe de artistas itinerantes, passando pelos anos vividos numa cidade hostil e pelo esforço para ingressar na escola de magia, O nome do vento acompanha a trajetória de Kote e as duas forças que movem sua vida: o desejo de aprender o mistério por trás da arte de nomear as coisas e a necessidade de reunir informações sobre o Chandriano – os lendários demônios que assassinaram sua família no passado.",
    },
    {
      imagem: "/images/html.png",
      titulo: "HTML",
      genero: "Programação",
      sinopse:
        "Dominar a linguagem HTML é um requisito básico para quem quer produzir conteúdos no mundo da web, tanto para fins profissionais como pessoais. Em sua versão mais recente, o HTML5, essa plataforma se tornou ainda mais poderosa. Por meio dela, webdesigners e programadores ao redor do mundo têm produzido sites cada vez mais impressionante.",
    },
    {
      imagem: "/images/Odisseia.png",
      titulo: "A Odisseia",
      genero: "História",
      sinopse:
        "A Odisseia narra a história de Ulisses, que depois de passar 10 anos na Guerra de Troia, leva mais 17 anos para voltar para casa, passando por muitas aventuras no caminho",
    },
    {
      imagem: "/images/divinaComedia.png",
      titulo: "A divina comédia",
      genero: "Poesia",
      sinopse:
        "O livro relata a viagem de Dante ao Inferno, ao Purgatório e ao Paraíso. O poeta Virgílio o acompanha tanto ao inferno – um vale nas entranhas da terra – como ao Purgatório, local onde as almas se purificam dos pecados capitais. Beatriz, a musa de Dante, o conduz ao Paraíso, formado por nove céus.",
    },
  ];

  let categorias = [
    {
      nome: "",
    },
    {
      nome: "Fantasia",
    },
    {
      nome: "Programação",
    },
    {
      nome: "História",
    },
    {
      nome: "Poesia",
    },
  ];

  const [livrosAdicionados, setLivrosAdicionados] = useState(livros);

  const AoNovoLivroAdicionado = (livro) => {
    console.log(livrosAdicionados);
    setLivrosAdicionados([...livrosAdicionados, livro]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        categorias={categorias.map((categoria) => categoria.nome)}
        aoNovoLivroCadastrado={(livro) => AoNovoLivroAdicionado(livro)}
      />
      <Estante livrosCadastrados={livrosAdicionados} categorias={categorias} />
    </div>
  );
}

export default App;
