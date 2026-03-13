import express, { Router } from 'express'
import { BD } from '../../db.js'


const router = Router();

//criando o entpoint para listar todos os usuarios
router.get('/usuarios', async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`
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

//endpoint para adicionar um novo usuario
//o endpoint com parametros diretos no comando sql, permite o sql injection
// router.post('/usuarios', async(req, res) => {
//     const nome = req.body.nome
//     const email = req.body.email
//     const senha = req.body.senha

// console.log(nome);

//     try {
//         const comando = `insert into teste(nome, email, senha) values('${nome}', '${email}', '${senha}')`

//         console.log(comando);
//         await BD.query(comando)
//         res.status(201).json('usuario cadastrado')

//     } catch (error) {
//         console.error('Erro ao cadastrar usuarios', error.message)
//         res.status(500).json({ error: 'Erro ao cadastrar usuarios' })
//     }

// })

//endpoint seguro contra sql injection
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body

    console.log(nome);

    try {
        const comando = `insert into usuarios(nome, email, senha) values($1, $2, $3)`
        const valores = [nome, email, senha]


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
    const {nome, email, senha} = req.body
    try {
        //verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios where id_usuario = $1`, [id_usuario]);
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario nâo encontrado'})
        }
        //atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE usuarios SET nome = $1, email = $2, senha = $3 where id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, valores)

        return res.status(200).json('usuario atualizado')
    } catch (error) {  
         console.error('Erro ao atualizar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar usuarios' })
    }
})

export default router
