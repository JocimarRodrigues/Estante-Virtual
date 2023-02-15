import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista">
      <label className="lista-suspensa">
        <label>{props.label}</label>
        <select
          onChange={(evento) => props.aoAlterado(evento.target.value)}
          value={props.valor}
        >
          {props.itens.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ListaSuspensa;
