import express, { Router } from 'express'
import { BD } from '../../db.js'
import { autenticarToken } from '../middleware/autenticacao.js'
import jwt from 'jsonwebtoken'
const router = Router()
const SECRET_KEY = 'sua_chave_secreta'
router.get('/servicos', autenticarToken, async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM servicos ORDER BY id_servico`
        //cria uma variavel para reveber o retorno no sql
        const servicos = await BD.query(query);

        //retorno para a pagina o json com os dados
        //buscandos do sql
        return res.status(200).json(servicos.rows);

    } catch (error) {
        console.error('Erro ao listar servicos', error.message)
        return res.status(500).json({ error: 'Erro ao listar servicos' })
    }
})

router.post('/servicos', autenticarToken, async (req, res) => {
    const { nome, preco, descricao} = req.body

    console.log(nome);

    try {
        //definir a força da criptografia
       
        //gerando a hash da descricao
       
        const comando = `insert into servicos(nome, preco, descricao) values($1, $2, $3)`
        const valores = [nome, preco, descricao]


        const responsta = await BD.query(comando, valores)
        console.log(responsta);


        return res.status(201).json('servico cadastrado')
    } catch (error) {
        console.error('Erro ao cadastrar servicos', error.message)
        return res.status(500).json({ error: 'Erro ao cadastrar servicos' })
    }

})

router.put('/servicos/:id_servico', autenticarToken, async (req, res) => {
    //id recebido via parametro
    const { id_servico } = req.params;
    //dados de servico recebido via corpo da pagina
    const { nome, preco, descricao} = req.body
    try {

        //verificar se o servico existe
        const verificarservico = await BD.query(`SELECT * FROM servicos where id_servico = $1`, [id_servico]);
        if (verificarservico.rows.length === 0) {
            return res.status(404).json({ message: 'servico nâo encontrado' })
        }
       
        //atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE servicos SET nome = $1, preco = $2, descricao = $3 where id_servico = $4`;
        const valores = [nome, preco, descricao, id_servico];
        await BD.query(comando, valores)

        return res.status(200).json('servico atualizado')
    } catch (error) {
        console.error('Erro ao atualizar servicos', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar servicos' })
    }
})

router.delete('/servicos/:id_servico', autenticarToken, async (req, res) => {
    const { id_servico } = req.params
    try {
        //executa o comando de delete
        const comando = `delete from servicos where id_servico = $1`
        await BD.query(comando, [id_servico])
        return res.status(200).json({ message: 'servico removido com sucesso' })
    } catch (error) {
        console.error('erro ao deletar servico', error.message)
        return res.status(500).json({ message: "erro interno no servidor" + error.message })
    }

})


export default router