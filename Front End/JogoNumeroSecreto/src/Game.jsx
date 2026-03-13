import { estilos } from "./GameEstilos"
import { useState } from "react"



const Game = () => {
    const [numeroSecreto, setSecreto] = useState(sortearNumero)
    const [Chute, setChute] = useState('')
    const [mensagem, setMensagem] = useState('adivinhe um número de 1 e 100')
    const [tentativas, setTentativas] = useState(1)
    const [JogoFinalizado, setJogoFinalizado] = useState(false)

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1
    }

    function reiniciarJogo() {
        setChute('')
        setJogoFinalizado(false)
        setTentativas(1)
        setMensagem('adivinhe um número de 1 e 100')
        setSecreto(sortearNumero)
    }

    function botaoChutar() {
        if (numeroSecreto == Chute) {
            setMensagem(`Acertou! Você descobriu em ${tentativas} tentativas!`)
            setJogoFinalizado(true)
        } else if (numeroSecreto < Chute){
            setMensagem(`Você chutou ${Chute} o número secreto é menor`)
            setChute('')
            setTentativas(tentativas + 1)
        }else {
            setMensagem(`Você chutou ${Chute} o número secreto é maior`)
            setChute('')
            setTentativas(tentativas + 1)
        }
    }


    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo Numero Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem} </p>
                    </div>
                    <input onChange={(event) => setChute(event.target.value)} value={Chute}
                    type="number" style={estilos.chute}/>
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                        <button style={estilos.botao} onClick={reiniciarJogo}>Novo Jogo</button>
                    </div>
                </div>
                <img src="./img/ia.png" style={estilos.imagem} />
            </div>
        </section>
    )
}

export default Game