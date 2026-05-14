import express from 'express';
//Importando o Banco de Dados
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js'
import rotasServicos from './src/routes/rotasServicos.js'
import rotasAgendamentos from './src/routes/rotasAgendamentos.js'


import swaggerUI from 'swagger-ui-express';
import documentacao from '../config/swagger.js';
import cors from  'cors'

const app = express();
app.use(express.json());
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(documentacao))
app.use(cors())

app.get('/', async(req, res)=> {
    await testarConexao();
    //res.status(200).json('API FUNCIONANDO ✅');
    res.redirect('/swagger')
});

//Utilizando rotas
app.use(rotasUsuarios);
app.use(rotasServicos);
app.use(rotasAgendamentos);


const porta = 3003;
app.listen(porta, () => {
    console.log(`-> http://localhost:${porta} <-`);
});