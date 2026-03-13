import {estilos} from "../style/Estilos"
import { useState } from "react"
import Aula06_contador from "./Aula06_contador"
import Aula06_Placar from "./Aula06_Placar"
import Aula06_calculadora from "./Aula06_calculadora"

const Aula06 = () => {
    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [visivel, setVisivel] = useState('')

    const botaoLimpar = () => {
        setNome('')
        setCidade('')
        setTelefone('')
    }

    return (
        <div>
            <h2 style={estilos.cardAula}>Aula 06 - Estado de um componente</h2>
            <h3>O hook useState adiciona estado a componentes funcionais</h3>
            <hr />

            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
            <input type="text" onChange={(event) => setCidade(event.target.value)} value={cidade} />
            <input type="number" onChange={(event) => setTelefone(event.target.value)} value={telefone} />
            <button onClick={botaoLimpar}>Limpar</button>
            <p>Olá {nome}, você mora em {cidade} e seu telefone é {telefone}</p>
            <hr />

            <button onClick={ () => setVisivel( !visivel )}>
                { visivel == false ? <p> Mostrar Saldo </p> : <p> Ocultar Saldo </p> }
            </button>

            { visivel == false ? <p> R$ ***,** </p> : <p> R$  732,10</p> }

            <hr />
            <Aula06_contador/>

            <hr />
            <Aula06_Placar/>

            <hr />
            <Aula06_calculadora/>
        </div>
    )
}

export default Aula06;