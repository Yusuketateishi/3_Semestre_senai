import { useEffect, useState } from "react";
import { estilos } from "../style/Estilos";
import Aula09_Nome from "./Aula09_Nome";

const Aula09_ListaNomes = () => {
    const [listaPresenca, setListaPresenca] = useState([])
    const [nome, setNome] = useState('')

    function excluirNome(nr) {
        const novoNome = listaPresenca.filter((nome) => nome != nr)
        setListaPresenca(novoNome)
    }

    function botaoLimpar() {
        setListaPresenca([])
        localStorage.removeItem('nome')
    }

    function botaoAdicionar() {
        //Armazenando localmente nosso contador 
        localStorage.setItem('nome', JSON.stringify([...listaPresenca, nome]))
        setListaPresenca([...listaPresenca, nome])
    }

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nome') || "[]";
        setListaPresenca(JSON.parse(nomeSalvo))
    }, [])


    return (
        <div style={estilos.cardAula}>
            <h1>Lista de Presença do Churrasco</h1>
            <input type="text" name="nome" id="nome" onChange={(event) => setNome(event.target.value)} value={nome} />
            <button onClick={() => botaoAdicionar()}>Adicionar</button>
            <div>
                {
                    listaPresenca.map((nome, index) => (
                        <Aula09_Nome key={index} nome={nome} excluir={() => excluirNome(nome)} />
                    ))
                }
            </div>
            <button onClick={botaoLimpar}>Limpar Lista</button>
        </div>
    )
}

export default Aula09_ListaNomes