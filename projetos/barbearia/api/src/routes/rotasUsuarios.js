import { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from 'bcrypt'
import {autenticarToken} from '../middleware/autenticacao.js'
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = 'sua_chave_secreta'

//Criando o endpoint para listar todos os usuarios
router.get('/usuarios',autenticarToken, async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM usuarios`

        //cria uma variavel para receber o retorno do sql
        const usuarios = await BD.query(query);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(usuarios.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar usuários', error.message);
        return res.status(500).json({error: 'Erro ao listar usuarios'})
    }
})

//Endpoint seguro contra sql Injection
router.post('/usuarios', async(req, res) => {
    const {nome, email, senha, tipo } = req.body;
    try{
        //definir a força da criptografia
        const saltRounds = 10;
        // gerando a hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        const comando = `INSERT INTO USUARIOS(nome, email, senha, tipo) VALUES($1, $2, $3, $4)`
        const valores = [nome, email, senhaCriptografada, tipo];

        await BD.query(comando, valores)
        console.log(comando,valores);

       return res.status(201).json("Usuário cadastrado.");
    }catch(error){
        console.error('Erro ao cadastrar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar usuarios'})
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o usuario
router.put('/usuarios/:id_usuario',autenticarToken, async(req, res) =>{
    // Id recebido via parametro
    const {id_usuario} = req.params;

    // Dados do usuario recebido via Corpo da página
    const {nome, email, senha, tipo} = req.body;
    try{
        //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1`, [id_usuario])
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
        //definir a força da criptografia
        const saltRounds = 10;
        // gerando a hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha =$3, tipo = $4 WHERE
        id_usuario = $5`;
        const valores = [nome, email, senhaCriptografada,tipo, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json('Usuario foi atualizado!');
    }catch(error){
        console.error('Erro ao atualizar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao atualizar usuarios'})
    }
})

router.delete('/usuarios/:id_usuario',autenticarToken, async(req, res) =>{
    const {id_usuario} = req.params;
    try{
        //Executa o comando de delete
        const comando = `DELETE FROM USUARIOS WHERE id_usuario = $1`
        await BD.query(comando, [id_usuario])
        return res.status(200).json({message: "Usuario removido com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

//Endpoint de Login
router.post('/login', async(req, res) =>{
    const {email, senha} = req.body;

    //Validação de entrada
    if(!email || !senha){
        return res.status(400).json({message: 'Email e senha são obrigatórios'})
    }
    try{
        //Buscar usuario pelo email
        const comando = 'SELECT id_usuario, nome, email, senha FROM USUARIOS WHERE email = $1'
        const resultado = await BD.query(comando, [email]);

        if(resultado.rows.length === 0) {
            return res.status(401).json({message: 'Email nao encontrado.'})
        }

        const usuario = resultado.rows[0]
        const senhaCorreta = await bcrypt.compare(senha,usuario.senha)

        //Verifica senha se são iguais
        if(!senhaCorreta){
            return res.status(401).json({message: 'Senha inválida.'})
        }

        //Gerando token para retornar e ser usado
        const token= jwt.sign(
            {id_usuario: usuario.id_usuario, email: usuario.email},
            SECRET_KEY, 
            //{expires: '15m'} //Tempo para expirar o token
        )

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            token: token,
            usuario: {
                id_usuario: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email
            }
        })
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno do servidor" + error.message})
    }
})

export default router
