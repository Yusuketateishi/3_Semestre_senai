import express, { Router } from 'express'
import { BD } from '../../db.js'
import bcrypt from 'bcrypt'

const router = Router();

//criando o entpoint para listar todos os usuarios
router.get('/usuarios', async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM usuarios WHERE ativo = true ORDER BY id_usuario`
        //cria uma variavel para reveber o retorno no sql
        const usuarios = await BD.query(query);

        //retorno para a pagina o json com os dados
        //buscandos do sql
        return res.status(200).json(usuarios.rows);

    } catch (error) {
        console.error('Erro ao listar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao listar usuarios' })
    }
})

//endpoint seguro contra sql injection
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha, tipo_acesso } = req.body

    console.log(nome);

    try {
        //Definir a força da criptografia
        const saltRounds = 10;
        //Gerando a hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        const comando = `insert into usuarios(nome, email, senha, tipo_acesso) values($1, $2, $3, $4)`
        const valores = [nome, email, senhaCriptografada, tipo_acesso]


        const responsta = await BD.query(comando, valores)
        console.log(responsta);


        return res.status(201).json('usuario cadastrado')
    } catch (error) {
        console.error('Erro ao cadastrar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao cadastrar usuarios' })
    }

})

//endpoint para atualizar um unico usuario(id)
//recebendo parametro pelo id e buscando o usuario
router.put('/usuarios/:id_usuario', async (req, res) => {
    //id recebido via parametro
    const {id_usuario} = req.params;
    //dados de usuario recebido via corpo da pagina
    const {nome, email, senha, tipo_acesso} = req.body
    try {
        //verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios where id_usuario = $1 and ativo = true`, [id_usuario]);
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario nâo encontrado'})
        }
        //Definir a força da criptografia
        const saltRounds = 10;
        //Gerando a hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        //atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE usuarios SET nome = $1, email = $2, senha = $3, tipo_acesso = $4 where id_usuario = $5`;
        const valores = [nome, email, senhaCriptografada, tipo_acesso, id_usuario];
        await BD.query(comando, valores)

        return res.status(200).json('usuario atualizado')
    } catch (error) {  
         console.error('Erro ao atualizar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar usuarios' })
    }
})

router.delete('/usuarios/:id_usuario', async(req, res) => {
    const {id_usuario} = req.params;
    try{
        //Executa o comando de delete
        const comando = `UPDATE USUARIOS SET ativo = false WHERE id_usuario = $1`
        await BD.query(comando, [id_usuario])
        return res.status(200).json({message: "Usuario removido com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar o usuario', error.message);
        return res.status(500).json({message:"Erro interno no servidor" + error.message})        
    }
})

//Endpoint de Login
router.post('/login', async(req, res) =>{
    const {email, senha} = req.body;

    //Validação de entrada
    if(!email || !senha){
        return res.status(400).json({message: 'Email e senha são obrigatórios'})
    }
    try {
        //Buscar usuario pelo email
        const comando = 'SELECT id_usuario, nome, email, senha FROM USUARIOS WHERE email = $1 and ativo = true'
        const resultado = await BD.query(comando, [email])

        if(resultado.rows.length === 0) {
            return res.status(401).json({message:"email nao encontrado"})
        }

        const usuario = resultado.rows[0]
        const senhaCorreta = await bcrypt.compare(senha,usuario.senha)

        //verific senha se sao iguais
        if(!senhaCorreta){
            return res.status(401).json({message:"senha nao encontrado"})
        }
        return res.status(200).json({
            message: 'Login realizado com sucesso',
            usuario: {
                id_usuario: usuario.id_usuario, 
                nome: usuario.nome,
                email: usuario.email
            }
        })

    } catch (error) {
        console.error('Erro ao usuario', error.message);
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

export default router
