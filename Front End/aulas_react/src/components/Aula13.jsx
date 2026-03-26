import { estilos } from "../style/Estilos"
import Aula13_cadastroProduto from "./Aula13_cadastroProdutos";
import Aula13_cadastroUsuario from "./Aula13_cadastroUsuarios";

const Aula13 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 13 - CRUD com APIs</h2>
            <h3>Criando um CRUD utilizando API desenvolvida em Backend</h3>
            <hr />

            <Aula13_cadastroProduto/>

            <hr />

            <Aula13_cadastroUsuario/>
        </div>
    );
};

export default Aula13;