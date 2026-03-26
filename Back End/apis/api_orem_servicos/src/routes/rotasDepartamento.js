import express, { Router } from 'express'
import { BD } from '../../db.js'

const router = Router();

//criando o entpoint para listar todos os departamento
router.get('/departamentos', async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM departamentos ORDER BY id_departamento`
        //cria uma variavel para reveber o retorno no sql
        const departamentos = await BD.query(query);

        //retorno para a pagina o json com os dados
        //buscandos do sql
        res.status(200).json(departamentos.rows);

    } catch (error) {
        console.error('Erro ao listar departamento', error.message)
        res.status(500).json({error:'Erro ao listar departamento'})
    }
})

router.post('/departamentos', async (req, res) => {
    const { nome, descricao } = req.body

    console.log(nome);

    try {
        const comando = `insert into departamentos(nome, descricao) values($1, $2)`
        const valores = [nome, descricao]


        const responsta = await BD.query(comando, valores)
        console.log(responsta);


        return res.status(201).json('departamentos cadastrado')
    } catch (error) {
        console.error('Erro ao cadastrar departamentos', error.message)
        return res.status(500).json({ error: 'Erro ao cadastrar departamentos' })
    }

})


router.put('/departamentos/:id_departamento', async (req, res) => {
    //id recebido via parametro
    const {id_departamento} = req.params;
    //dados de departamento recebido via corpo da pagina
    const {nome, descricao} = req.body
    try {
        //verificar se o departamento existe
        const verificardepartamento = await BD.query(`SELECT * FROM departamentos where id_departamento = $1`, [id_departamento]);
        if(verificardepartamento.rows.length === 0){
            return res.status(404).json({message: 'departamento nâo encontrado'})
        }
        //atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE departamentos SET nome = $1, descricao = $2 where id_departamento = $3`;
        const valores = [nome, descricao, id_departamento];
        await BD.query(comando, valores)

        return res.status(200).json('departamento atualizado')
    } catch (error) {  
         console.error('Erro ao atualizar departamentos', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar departamentos' })
    }
})

    router.patch('/departamentos/:id_departamento', async(req, res)=> {
const {id_departamento} = req.params;
const {nome, descricao} = req.body

    try {
         //verificar se o departamento existe
        const verificarDepartamento = await BD.query(`SELECT * FROM departamentos where id_departamento = $1`, [id_departamento]);
        if(verificarDepartamento.rows.length === 0){
            return res.status(404).json({message: 'Departamento nâo encontrado'})
        }

        //montar o update dinamicamente(apenas campos enviados)
        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome)
            contador++
        }
        if (descricao !== undefined) {
            campos.push(`descricao = $${contador}`);
            valores.push(descricao)
            contador++
        }

        //se nenhum campos foi enviado
        if(campos.length === 0){
            return res.status(400).json({message: "nenhum campo a atualizar"})
        }


        //adicionan id ao final de valores
        valores.push(id_departamento
        )

        //montando a query dinamicamente
        const comando = `update departamentos set ${campos.join(', ')} where id_departamento = $${contador}`
        await BD.query(comando, valores)
        return res.status(200).json('departamento atualizado com sucesso')
    } catch (error) {
        console.error('erro autualizar departamento', error.message)
        return res.status(500).json({message: "erro interno no servidor" + error.message})
    }

})


router.delete('/departamentos/:id_departamento', async(req, res) => {
    const {id_departamento} = req.params;
    try{
        //Executa o comando de delete
        const comando = `DELETE FROM DEPARTAMENTOS WHERE id_departamento = $1`
        await BD.query(comando, [id_departamento])
        return res.status(200).json({message: "departamentos removido com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar o departamento', error.message);
        return res.status(500).json({message:"Erro interno no servidor" + error.message})        
    }
})

export default router
