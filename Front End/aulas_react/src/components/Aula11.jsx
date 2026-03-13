import { estilos } from "../style/Estilos"
import Aula11_cadastroProduto from "./Aula11_cadastroProdutos"
import Aula11_Produtos from "./Aula11_Produtos"

const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula11 = Cadastro de Produto</h2>
            <h3>Criando uma lista de produtos e armazenando os dados localmente</h3>

            <hr />
            <Aula11_cadastroProduto />

        </div>
    )
}

export default Aula11