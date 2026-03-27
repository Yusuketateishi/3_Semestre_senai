import { estilos } from "../style/Estilos"
import { useEffect, useState } from "react"
import { enderecoServidor } from "../utils"
import Aula13_Produtos from "./Aula13_Produtos"

const Aula13_cadastroProduto = () => {

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
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    function botaoAlterar(produto) {
        setNome(produto.nome)
        setPreco(produto.preco)
        setImg(produto.link_imagem)
        setLink(produto.link_produto)
        setCategoria(produto.categoria)
        setFrete(produto.frete)
        setEditando(true)
        setId(produto.id_produto)
    }

  async function botaoAdicionar() {

        const novoProduto = {
            nome: nome,
            preco: preco,
            link_imagem: imagem,
            link_produto: link,
            categoria: categoria,
            frete: frete
        }
        
        try{
            //let endpoint ="http://10.130.42.68:3001/produtos"
            let endpoint =`${enderecoServidor}/produtos`
            let metodo = 'POST'

            if (editando == true) {
                endpoint = `${enderecoServidor}/produtos/${id}`
                metodo = 'PUT'
            }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            })

            if(!resposta.ok) {
                throw new Error('Erro ao adicionar produto' + resposta)
            }

            buscarDados(    )
            LimparCamposFormularios()
        }catch (error) {
            console.error('erro ao adicionar produto', error.message);
            
        }

    }
  async  function botaoExcluir(id_produto) {

        try{
            const resposta = await fetch(`${enderecoServidor}/produtos/${id_produto}`, {
                method: 'DELETE',
            })

            if(!resposta.ok) {
                throw new Error('Erro ao excluir produto' + resposta)
            }

            buscarDados()
        }catch (error) {
            console.error('erro ao excluir produto', error.message);
            
        }

    }

    

    function LimparCamposFormularios() {
        setNome('')
        setPreco(0)
        setImg('')
        setLink('')
        setCategoria('')
        setFrete(false)
        setEditando(false)
        setId('')
    }

    useEffect(() => {
        buscarDados()
    }, [])

    async function buscarDados() {
        try {
            const resposta = await fetch (`${enderecoServidor}/produtos`)
            const dados = await resposta.json()
            setListaProdutos(dados)
            
        } catch (error) {
            console.error("Erro ao carregar os dados", error.message);
            
        }
    }

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
                    <option value="Roupa">Roupa</option>
                </select>
                <input type="checkbox" onChange={(event) => setFrete(event.target.value)} checked={frete} /><label>Frete Grátis</label>
                <button onClick={() => botaoAdicionar()}>
                    { editando == false ? "Adicionar Produto" : "Editar Produto" }
                </button>
                {
                    editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }

                <hr />

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula13_Produtos key={pos} produto={produto} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aula13_cadastroProduto