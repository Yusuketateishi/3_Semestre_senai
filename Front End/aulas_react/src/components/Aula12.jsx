import { useEffect, useState } from "react"
import {estilos} from "../style/Estilos"
import Aula12_CEP from "./Aula12_CEP"
import Aula12_store from "./Aula12_store"

const Aula12 = () => {
    const [imagem, setImagem] = useState("")
    
    const buscarDados = async () => {
        try{
        //No fetch colocamos o endpoint da API
        // http://localhost:3000/usuarios
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
        const dados = await resposta.json()
        console.log(dados.message);
        setImagem(dados.message)
    } catch (error) {
        console.log('Erro ao buscar dados', error);
    }
    }

    useEffect ( () => {
        buscarDados()
    }, [])

    return(
        <div style={estilos.cardAula}>
            <h2>Aula 12 - consumo de APIs</h2>
            <h3>Apredendo a utilizar APIs em React</h3>
            <hr />
            <div>
                <p>Imagem de cachorro</p>
                <img src={imagem} width={300} />
                <button onClick={buscarDados}>Exibir imagem</button>
            </div>
        
        <hr />
        
        <Aula12_CEP />

        <hr />

        <Aula12_store/>

        </div>
    )
}

export default Aula12