import CampoTexto from '../components/CampoTexto';
import LivrosCadastrados from '../LivrosCadastrados'

const Formulario = (props) => {
    return (
        <section>
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
            </form>
        </section>
    )
}

export default Formulario;