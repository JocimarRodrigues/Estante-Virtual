import LivrosCadastrados from "../../LivrosCadastrados";
import NovoLivroCadastrado from "../novoLivroCadastrado";
import { useState } from "react";
import "./Estante.css";



const Estante = (props) => {

  return (
    <section>
      <div className="estante">
        <h3>{props.titulo}</h3>
        
      </div>
    </section>
  );
};

export default Estante;
