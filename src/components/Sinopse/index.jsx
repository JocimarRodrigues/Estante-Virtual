import './Sinopse.css'

const Sinopse = (props) => {
    return (
        <div className='sinopse'>
        <label>Sinopse</label>
        <textarea value={props.valor} onChange={(evento) => props.aoAlterado(evento.target.value)} placeholder={props.placeholder} required={props.obrigatorio}>
         
        </textarea>
        </div>
    )
}

export default Sinopse;
