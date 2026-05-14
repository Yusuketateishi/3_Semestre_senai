import express, { Router } from 'express'
import { BD } from '../../db.js'
import { autenticarToken } from '../middleware/autenticacao.js'
import jwt from 'jsonwebtoken'
const router = Router()
const SECRET_KEY = 'sua_chave_secreta'
router.get('/agendamentos', autenticarToken, async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM agendamentos ORDER BY id_agendamento`
        //cria uma variavel para reveber o retorno no sql
        const agendamentos = await BD.query(query);

        //retorno para a pagina o json com os dados
        //buscandos do sql
        return res.status(200).json(agendamentos.rows);

    } catch (error) {
        console.error('Erro ao listar agendamentos', error.message)
        return res.status(500).json({ error: 'Erro ao listar agendamentos' })
    }
})

router.post('/agendamentos', autenticarToken, async (req, res) => {
    const { id_usuario, id_servico, data_hora, status } = req.body

    console.log(id_usuario);

    try {
        //definir a força da criptografia

        //gerando a hash da status

        const comando = `insert into agendamentos(id_usuario, id_servico, data_hora ,status) values($1, $2, $3, $4)`
        const valores = [id_usuario, id_servico, data_hora, status]


        const responsta = await BD.query(comando, valores)
        console.log(responsta);


        return res.status(201).json('agendamento cadastrado')
    } catch (error) {
        console.error('Erro ao cadastrar agendamentos', error.message)
        return res.status(500).json({ error: 'Erro ao cadastrar agendamentos' })
    }

})

router.put('/agendamentos/:id_agendamento', autenticarToken, async (req, res) => {
    //id recebido via parametro
    const { id_agendamento } = req.params;
    //dados de agendamento recebido via corpo da pagina
    const { id_usuario, id_servico, data_hora, status } = req.body
    try {

        //verificar se o agendamento existe
        const verificaragendamento = await BD.query(`SELECT * FROM agendamentos where id_agendamento = $1`, [id_agendamento]);
        if (verificaragendamento.rows.length === 0) {
            return res.status(404).json({ message: 'agendamento nâo encontrado' })
        }

        //atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE agendamentos SET id_usuario = $1, id_servico = $2, data_hora = $3, status = $4 where id_agendamento = $5`;
        const valores = [id_usuario, id_servico, data_hora, status, id_agendamento];
        await BD.query(comando, valores)

        return res.status(200).json('agendamento atualizado')
    } catch (error) {
        console.error('Erro ao atualizar agendamentos', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar agendamentos' })
    }
})

router.delete('/agendamentos/:id_agendamento', autenticarToken, async (req, res) => {
    const { id_agendamento } = req.params
    try {
        //executa o comando de delete
        const comando = `delete from agendamentos where id_agendamento = $1`
        await BD.query(comando, [id_agendamento])
        return res.status(200).json({ message: 'agendamento removido com sucesso' })
    } catch (error) {
        console.error('erro ao deletar agendamento', error.message)
        return res.status(500).json({ message: "erro interno no servidor" + error.message })
    }

})

export default router