import './CampoTexto.css'

const CampoTexto = (props) => {
const aoDigitado = (e) => {
    props.aoAlterado(e.target.value)
    console.log(props.valor)
}

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} type={props.tipo}></input>
        </div>
    )
}

export default CampoTexto;