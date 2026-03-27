import { useState } from "react"
import { enderecoServidor } from "../utils"
import { useNavigate } from "react-router-dom";

const Aula15_Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [log, setLog] = useState('')
    const [mensagem, setMensagem] = useState('')

    const verificar = async (event) => {
        //Função para não recarregar a tela
        event.preventDefault();
        console.log('1');
        
        try {
            if (email == '' || senha == '') {
                throw new Error('Preencha todos os campos');

            }

            console.log('2');
            const login = {
                email: email,
                senha: senha
            }
            console.log('2.1');
            //Utilizando autenticacao com API do backend
            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(login)
            })
            console.log(resposta);
            console.log('3');
            const dados = await resposta.json()
            if (resposta.ok) {
                console.log("Login bem sucedido", dados);
                setMensagem("Login bem-sucedido!")
                localStorage.setItem('UsuarioLogado', JSON.stringify(dados))
                navigate('/inicio')
            } else {
                setMensagem('Email ou senha incorretos')
                console.log('Erro ao fazer o login', dados);
            }

        } catch (erro) {
            console.error('Erro ao realizar login:', erro);
            setMensagem(erro.message)
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <img src="data:image/jpeg;base64,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" alt="SENAI" style={estilos.logo} />
            <h1>Login</h1>
            <div style={estilos.groupInput}>
                <label style={estilos.label} htmlFor="">Email</label>
                <input onChange={(event) => setEmail(event.target.value)} value={email}
                    type="text" placeholder='Digite seu email' style={estilos.input} />
            </div>
            <div style={estilos.groupInput}>
                <label style={estilos.label} htmlFor="">Senha</label>
                <input onChange={(event) => setSenha(event.target.value)} value={senha}
                    type="password" placeholder='digite sua senha' style={estilos.input} />
            </div>
            <button onClick={verificar} style={estilos.botao}>Entrar</button>
            {/* { log == false ? <p> Senha ou Email incorreto </p> : <p> Login bem-sucedido! </p> } */}
            {mensagem}
        </div>
    )
};

/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        margin: '10px auto',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
        borderRadius: '8px',
        gap: '5px'
    },
    logo: {
        height: '50px'
    },
    label: {
        display: 'block',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    botao: {
        width: '100%',
        backgroundColor: '#e30613',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px'
    },
    groupInput: {
        width: '100%'
    }
};

export default Aula15_Login