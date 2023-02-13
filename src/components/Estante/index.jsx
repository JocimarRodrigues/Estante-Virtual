

import { useState } from "react";
import "./Estante.css";



const Estante = (props) => {

  return (
    <section>
      <div className="estante">
        <h3>{props.genero}</h3>
        
      </div>
    </section>
  );
};

export default Estante;
