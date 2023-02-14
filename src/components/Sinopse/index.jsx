import './Sinopse.css'

const Sinopse = (props) => {
    return (
        <div className='sinopse'>
        <label>Sinopse</label>
        <textarea value={props.valor} onChange={(evento) => props.aoAlterado(evento.target.value)} placeholder={props.placeholder}>
         
        </textarea>
        </div>
    )
}

export default Sinopse;

/*         Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman. */