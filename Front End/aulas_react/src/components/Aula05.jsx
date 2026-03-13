import { estilos } from "../style/Estilos"
import Aula05_exercicio from "./Aula05_exercicio";

const Aula05 = () => {
    function botaoClique() {
        alert ('Você clicou no botão')
        console.log("Clicou no botão");
    };
    function entradaMouse (event) {
        console.log('Mouse Entrou');
        event.target.style.backgroundColor = '#bb0b0b'
    }
    function saidaMouse (event) {
        console.log('Mouse Saiu');
        event.target.style.backgroundColor = '#7dffb3'
    }
    
    function alterarCor (event) {
        if (event.key == 'v') {
            event.target.style.backgroundColor = 'green'
            event.target.style.color = 'white'
        } else if (event.key == 'r') {
            event.target.style.backgroundColor = 'purple'
            event.target.style.color = 'white'
        }else if (event.key == 'c') {
            event.target.style.backgroundColor = 'gray'
            event.target.style.color = 'white'
        }else if (event.key == 'a') {
            event.target.style.backgroundColor = 'blue'
            event.target.style.color = 'white'
        }
    }
    

    return(
        <div style={estilos.cardAula}>
            <h2>Aula 05 -Eventos de um componente</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações web</h3>
            <hr />

            <p>Evento onClick - clique do usuário em qualquer elemento</p>
            <button onClick={botaoClique}>Clique Aqui</button>
            <p onDoubleClick={() => alert ("Duplo Clique")}> Este parágrafo recebe um duplo clique </p>

            <hr />

            <p>Event onChange - sempre que um campo de entrada é alterado</p>

            <input onChange={() => alert(event.target.value)} type="text" placeholder="Digite algo..."/>

            <select onChange={() => alert(event.target.value)}>
                <option value="1A">1º A EM</option>
                <option value="2A">2º A EM</option>
                <option value="3A">3º A EM</option>
                <option value="3B">3º B EM</option>
            </select>

            <hr />

            <p>Evento onMouseEnter / onMouseLeave </p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui</p>

            <hr />
            
            <p>Evento onKeyDown - Aciona o evento quando pressiona uma tecla</p>
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <input type="text" onKeyDown={alterarCor} placeholder="a - azul, v - verde, c - cinza, r - roxo"/>

            <hr />
            <Aula05_exercicio/>
        </div>
    )
}

export default Aula05