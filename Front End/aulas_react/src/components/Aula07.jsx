import { estilos } from "../style/Estilos";
import Aula07_Multicomponentes, { enderecoServidor, MeuComponenteNomeado, MeuComponenteNomeado2 } from "./Aula07_multicomponentes";
import Aula07_Perfil from "./Aula07_Perfil";

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de Módulos</h2>
            <h3>Compreendendo importação e exportação padrão ou nomeada</h3>
            <hr />

            <Aula07_Multicomponentes />
            <MeuComponenteNomeado />
            <MeuComponenteNomeado2 />
            <p>{enderecoServidor}</p>
            <hr />

            <Aula07_Perfil/>

        </div>
    )
}

export default Aula07