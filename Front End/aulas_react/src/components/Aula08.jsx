import { estilos } from "../style/Estilos";
import imagem from "../assets/imagem.png"

const Aula08 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 08 - Revisão</h2>
            <h3>Revisão de conteúdo com o Jogo Número Secreto</h3>
            <a href="https://jogo-numero-secreto-7dvd8azg3-marcelos-projects-05a58ab3.vercel.app/" target="_blank">
                <img src={imagem} style={{width:'100%'}} />
                Link do Jogo
            </a>
        </div>
    )
}

export default Aula08