import { useState } from "react";
import { estilos } from "../style/Estilos";
import Aula07_Perfil from "./Aula07_Perfil";
import Aula09_Numero from "./Aula09_Numero";
import Aula09_ListaNomes from "./Aula09_ListaNomes";

const Aula09 = () => {
const [numerosSorteados, setNumerosSorteados] = useState( [10,43,28,2] )
const [listaPerfis, setListaPerfis] = useState ([
    {"nome": "Nicolas", "foto": "https://www.google.com/imgres?q=phineas&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb683a9bde3df71a12db47a94a&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Fartist%2F48biqUQJGRdB9iTPIUPY0h&docid=xZzD4W7TweioRM&tbnid=SY9DSUmpMFByPM&vet=12ahUKEwjh9dH40feSAxVNlpUCHXGdCogQM3oECBcQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjh9dH40feSAxVNlpUCHXGdCogQM3oECBcQAA"},
    {"nome": "Diogo", "foto": "https://www.google.com/imgres?q=ferb&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616100005174d6c19a3df291f9d0f3d7248c&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Fartist%2F04K0BYv0Afn6AGrT2rsji2&docid=cdP2Pk98BWnM-M&tbnid=7r4oiFXo_iVs-M&vet=12ahUKEwjRidmX0veSAxWnuZUCHRftMsUQM3oECB0QAA..i&w=320&h=320&hcb=2&ved=2ahUKEwjRidmX0veSAxWnuZUCHRftMsUQM3oECB0QAA"}
])
function botaoSortear () {
    const novoNumero = Math.floor(Math.random() * 60) + 1
    setNumerosSorteados([...numerosSorteados, novoNumero])
}


function botaoExcluir (nr) {
    const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
    setNumerosSorteados(novosNumeros)
}

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 09 - Lista em React</h2>
            <h3>Exibindo conteúdos dinamicamente com listas</h3>
            <hr />

            <button onClick={botaoSortear}>Novo Número</button>

            <h3>Lista de números sorteados:</h3>
            {/* A função map é comoo for para arrays/vetores*/}
            <div style={{display: "flex"}}>
            {
                numerosSorteados.map( (numero, index) => (
                  <Aula09_Numero key={index} numero={numero} excluir={() => botaoExcluir(numero)} />
                ))
            }
            </div>

            <div style={{display: "flex"}}>
            {
                listaPerfis.map((perfil, index) => (
                    <Aula07_Perfil key={index} nome={perfil.nome} foto={perfil.foto}/> 
                ))
            }
            </div>
            <hr />

            <Aula09_ListaNomes/>
        </div>
    )
}

export default Aula09