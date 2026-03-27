import { estilos } from "../style/Estilos"
import { useEffect, useState } from "react"
import { enderecoServidor } from "../utils"
import Aula13_Usuarios from "./Aula13_Usuarios"

const Aula13_cadastroUsuario = () => {

    //localStorage.setItem('vetorListaProduto', JSON.stringify(listaProdutos))
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    function botaoAlterar(usuario) {
        setNome(usuario.nome)
        setEmail(usuario.email)
        setSenha(usuario.senha)
        setEditando(true)
        setId(usuario.id_usuario)
    }

    async function botaoAdicionar() {

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        
        try{
            let endpoint =`${enderecoServidor}/usuarios`
            let metodo = 'POST'

            if (editando == true) {
                endpoint = `${enderecoServidor}/usuarios/${id}`
                metodo = 'PUT'
            }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoUsuario)
            })

            if(!resposta.ok) {
                throw new Error('Erro ao adicionar usuario' + resposta)
            }

            buscarDados(    )
            LimparCamposFormularios()
        }catch (error) {
            console.error('erro ao adicionar usuario', error.message);
            
        }
        
    }

    function LimparCamposFormularios(){
        setNome('')
        setEmail('')
        setSenha('')
        setEditando(false)
        setId('')
    }

    useEffect(() => {
        buscarDados()
    }, [])

    async function buscarDados() {
        try {
            const resposta = await fetch (`${enderecoServidor}/usuarios`)
            const dados = await resposta.json()
            setListaUsuarios(dados)
            
        } catch (error) {
            console.error("Erro ao carregar os dados", error.message);
            
        }
    }

    async  function botaoExcluir(id_usuario) {

        try{
            const resposta = await fetch(`${enderecoServidor}/usuarios/${id_usuario}`, {
                method: 'DELETE',
            })

            if(!resposta.ok) {
                throw new Error('Erro ao excluir usuario' + resposta)
            }

            buscarDados()
        }catch (error) {
            console.error('erro ao excluir usuario', error.message);
            
        }

    }

    return (
        <div style={estilos.cardAula}>
            <h1>Cadastro de usuários</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)} value={nome} />
                <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} />
                <input type="password" placeholder="Senha" onChange={(event) => setSenha(event.target.value)} value={senha} />
                <button onClick={() => botaoAdicionar()}>
                    { editando == false ? "Adicionar Usuário" : "Editar Usuário" }
                </button>
                {
                    editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }

                <hr />

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {
                        listaUsuarios.map((usuario, pos) => (
                            <Aula13_Usuarios key={pos} usuario={usuario} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aula13_cadastroUsuario