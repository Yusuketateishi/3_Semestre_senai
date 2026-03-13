import { estilos } from "../style/Estilos"

const Aula05_exercicio = () => {
    function botaoClique1() {
        alert ('Botão1 foi pressionado')
        console.log("Clicou no botão");
    };
    function botaoClique2() {
        alert ('Botão2 foi pressionado')
        console.log("Clicou no botão");
    };
    function entradaMouse (event) {
        console.log('Mouse Entrou');
        event.target.style.backgroundColor = '#bb0b0b'
    }
    function saidaMouse (event) {
        console.log('Mouse Saiu');
        event.target.style.backgroundColor = '#1263d5'
    }

    function alterarCor (event) {
        if (event.key == 'v') {
            event.target.style.backgroundColor = 'red'
            event.target.style.color = 'white'
        } else if (event.key == 'p') {
            event.target.style.backgroundColor = 'black'
            event.target.style.color = 'white'
        }else if (event.key == 'y') {
            event.target.style.backgroundColor = 'yellow'
            event.target.style.color = 'white'
        }else if (event.key == 'a') {
            event.target.style.backgroundColor = 'blue'
            event.target.style.color = 'white'
        }else if (event.key == 'g') {
            event.target.style.backgroundColor = 'green'
            event.target.style.color = 'white'
        }else if (event.key == '+') {
            event.target.style.fontSize = '32px'
            event.target.style.color = 'white'
        }else if (event.key == '-') {
            event.target.style.fontSize = '16px'
            event.target.style.color = 'white'
    }
    }
    return (
        <div style={estilos.cardAula}>
            <h2>Exercício Aula05</h2>
            <p>Evento onClick - clique do usuário em qualquer elemento</p>
            <button onClick={botaoClique1}>Clique Aqui</button>
            <button onClick={botaoClique2}>Clique Aqui</button>

            <hr />
            <p>Event onChange - sempre que um campo de entrada é alterado</p>

            <input onChange={() => console.log(event.target.value)} type="text" placeholder="Digite algo..."/>

            <hr />
            <p>Evento onMouseEnter / onMouseLeave </p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui</p>

            <hr />
            <p>Evento onKeyDown - Aciona o evento quando pressiona uma tecla</p>
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <hr />
            <p>Texto com a aplicação de todosos eventos vistos</p>
            <input onClick={() => console.log("o botão foi apertado")} onChange={() => console.log(event.target.value)} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse} onKeyDown={alterarCor} type="text" placeholder="Digite seu Texto..." />
        </div>
    )
}

export default Aula05_exercicio