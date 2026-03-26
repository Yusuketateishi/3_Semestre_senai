import { useState } from "react"
import { estilos } from "../style/Estilos"

const Aula12_store = () => {
    const [id, setId] = useState('')
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')
    const [category, setcategory] = useState('')
    const [image, setimage] = useState('')
   
    const buscar = async() => {
        try {
            const buscas = await fetch(`https://fakestoreapi.com/products/${id}`)
            const dados = await buscas.json()
            settitle(dados.title)
            setprice(dados.price)
            setcategory(dados.category)
            setimage(dados.image)

        } catch (error) {
            console.error('erro ao buscar dados', error);
        }
    }



    return (    
        <div style={estilos.cardAula}>
            <h2>Buscar lojas ficticias</h2>
            <input type="number" title="" id="" placeholder="exemplo: 1" onChange={(event) => setId(event.target.value)} value={id} />
            <button onClick={buscar}>buscar</button>
            <p>nome:{title}</p>
            <p>preço:{price}</p>
            <p>categoria:{category}</p>
            <img src={image} width={300} />
        </div>
    )
}

export default Aula12_store
