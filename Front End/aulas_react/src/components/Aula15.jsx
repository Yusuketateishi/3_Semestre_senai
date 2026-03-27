//importando um arquivo css tradicional
import "../style/Aula03.css"
//importando um arquivo jsx estilos
import {estilos} from '../style/Estilos'
import Aula15_Login from "./Aula15_Login"


const Aula15 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula15 = Login com API</h2>
            <h3>Utilizando o login juntamente com uma API</h3>
            <hr />
            <Aula15_Login/>
        </div>
    )
}

export default Aula15