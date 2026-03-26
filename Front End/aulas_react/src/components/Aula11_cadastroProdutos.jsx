import { estilos } from "../style/Estilos"
import { useEffect, useState } from "react"
import Aula11_Produtos from "./Aula11_Produtos"

const Aula11_cadastroProduto = () => {

    const [listaProdutos, setListaProdutos] = useState([
        {
            nome: "Super Mario Bros 2",
            preco: 20,
            imagem: 'gbgb',
            link: 'https://www.nintendo.com/pt-br/store/products/new-super-mario-bros-u-deluxe-switch/',
            categoria: 'Jogos',
            frete: true
        },
        {
            nome: "Kirby Star Allies",
            preco: 30,
            imagem: 'gbgb',
            link: 'https://www.nintendo.com/pt-pt/Jogos/Super-Nintendo/Kirby-Super-Star-757900.html?srsltid=AfmBOoo_1WpE9G0djYgxT9aAaHNEekUeuIEbpGMo85TI13UZr3GuaoCM',
            categoria: 'Jogos',
            frete: false
        }
    ])

    //localStorage.setItem('vetorListaProduto', JSON.stringify(listaProdutos))

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImg] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')
    const [frete, setFrete] = useState(false)



    function botaoAdicionar() {

        const novoProduto = {
            nome: nome,
            preco: preco,
            imagem: imagem,
            link: link,
            categoria: categoria,
            frete: frete
        }
        const novaListaProdutos = [ ...listaProdutos, novoProduto]
        setListaProdutos(novaListaProdutos)
        localStorage.setItem('vetorListaProduto', JSON.stringify(novaListaProdutos))
        //localStorage.setItem('produto', JSON.stringify([...listaProdutos, nome, preco, imagem, link, categoria, frete]))
        //setListaProdutos([...listaProdutos, nome, preco, imagem, link, categoria, frete])

        setNome('')
        setPreco('')
        setImg('')
        setLink('')
        setCategoria('')
        setFrete(false)
    }

    useEffect(() => {
        
        const listaSalva = localStorage.getItem('vetorListaProduto') || "[]";
        setListaProdutos(JSON.parse(listaSalva))
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h1>Cadastro de produtos</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)} value={nome} />
                <input type="text" placeholder="Preço" onChange={(event) => setPreco(event.target.value)} value={preco} />
                <input type="text" placeholder="URL da imagem" onChange={(event) => setImg(event.target.value)} value={imagem} />
                <input type="text" placeholder="Link do Produto" onChange={(event) => setLink(event.target.value)} value={link} />
                <select name="" id="" onChange={(event) => setCategoria(event.target.value)} value={categoria}>
                    <option value="" >Selecione uma Categoria</option>
                    <option value="Jogos">Jogos</option>
                    <option value="Eletronicos">Eletrônicos</option>
                    <option value="Livros">Livros</option>
                    <option value=""></option>
                </select>
                <input type="checkbox" onChange={(event) => setFrete(event.target.value)} checked={frete} /><label>Frete Grátis</label>
                <button onClick={() => botaoAdicionar()}>Cadastrar</button>

                <hr />

                <div style={{ display: "flex", gap: 10, flexWrap: "warp" }}>
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula11_Produtos key={pos} produto={produto} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aula11_cadastroProduto