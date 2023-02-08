import './Formulario.css'
import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao'


const Formulario = (props) => {
    return (
        <section className='formulario'>
            <form>
                <CampoTexto 
                label="Titulo do livro"
                placeholder="Digite o titulo."

                />
                <CampoTexto 
                label="Genero"
                placeholder="Digite um gênero."

                />
                <CampoTexto 
                label="Imagem"
                placeholder="Digite o endereço da imagem"
                
                />
                <CampoTexto 
                label="Quantidade"
                placeholder="Digite a quantidade disponível para venda."
                />

                <CampoTexto 
                label="Preço"
                placeholder="Digite o preço por unidade"
                />
                <Botao>
                    Criar Livro
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;