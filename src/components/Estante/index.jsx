

import { useState } from "react";
import LivrosCadastrados from "../../LivrosCadastrados";
import "./Estante.css";



const Estante = (props) => {
  console.log(props.livrosCadastrados)
  return (
    <section>
      <div className="estante">
        <h3>{props.livrosCadastrados.genero}</h3>
        
      </div>
    </section>
  
  );
};

export default Estante;
