import { useState } from "react"
import { estilos } from "../style/Estilos"
const Aula12_CEP = () =>{
     const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')
   
    const buscar = async() => {
        try {
            const buscas = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dados = await buscas.json()
            setLogradouro(dados.logradouro)
            setBairro(dados.bairro)
            setLocalidade(dados.localidade)
            setUf(dados.uf)

        } catch (error) {
            console.error('erro ao buscar dados', error);
        }
    }



    return (
        <div style={estilos.cardAula}>
            <h2>Buscar cep</h2>
            <input type="text" onChange={(event) => setCep(event.target.value)} value={cep} />
            <button onClick={buscar}>buscar</button>
            <p>Logradouro:{logradouro}</p>
            <p>Bairro:{bairro}</p>
            <p>Cidade:{localidade}</p>
            <p>Estado:{uf}</p>
        </div>
    )
}


export default Aula12_CEP