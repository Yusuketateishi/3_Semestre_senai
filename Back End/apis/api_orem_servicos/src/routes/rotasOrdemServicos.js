import express, { Router } from 'express'
import { BD } from '../../db.js'

const router = Router();

//criando o entpoint para listar todos os departamento
router.get('/ordem_servicos', async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`
        //cria uma variavel para reveber o retorno no sql
        const ordem_servicos = await BD.query(query);

        //retorno para a pagina o json com os dados
        //buscandos do sql
        res.status(200).json(ordem_servicos.rows);

    } catch (error) {
        console.error('Erro ao listar a Ordem de serviços', error.message)
        res.status(500).json({error:'Erro ao listar a Ordem de serviços'})
    }
})

router.post('/ordem_servicos', async (req, res) => {
    const { nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body

    try {
        const comando = `insert into ordem_servicos(nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento ) values($1, $2, $3, $4, $5, $6, $7, $8)`
        const valores = [nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento]


        const responsta = await BD.query(comando, valores)
        console.log(responsta);


        return res.status(201).json('ordem cadastrado')
    } catch (error) {
        console.error('Erro ao cadastrar ordem', error.message)
        return res.status(500).json({ error: 'Erro ao cadastrar ordem' })
    }

})

router.put('/ordem_servicos/:id_ordem', async (req, res) => {
    //id recebido via parametro
    const {id_ordem} = req.params;
    //dados de ordem recebido via corpo da pagina
    const {titulo, descricao, prioridade, status, data, id_usuario, id_departamento} = req.body
    try {
        //verificar se o ordem existe
        const verificarordem = await BD.query(`SELECT * FROM ordem_servicos where id_ordem = $1`, [id_ordem]);
        if(verificarordem.rows.length === 0){
            return res.status(404).json({message: 'ordem nâo encontrado'})
        }
        //atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE ordem_servicos SET titulo = $1, descricao = $2, prioridade = $3, status = $4, data = $5, id_usuario = $6, id_departamento = $7 where id_ordem = $8`;
        const valores = [titulo, descricao, prioridade, status, data, id_usuario, id_departamento, id_ordem];
        await BD.query(comando, valores)

        return res.status(200).json('ordem atualizado')
    } catch (error) {  
         console.error('Erro ao atualizar ordems', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar usuarios' })
    }
})

export default router
