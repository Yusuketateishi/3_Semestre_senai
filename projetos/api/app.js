import express from 'express';
//Importando o Banco de Dados
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js'
import rotasTransacoes from './src/routes/rotasTransacoes.js'
import rotasCategorias from './src/routes/rotasCategorias.js'
import rotasSubcategorias from './src/routes/rotasSubcategorias.js'

import swaggerUI from 'swagger-ui-express';
import documentacao from './config/swagger.js';
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
app.use(rotasCategorias);
app.use(rotasSubcategorias);
app.use(rotasTransacoes);


const porta = 3001;
app.listen(porta, () => {
    console.log(`-> http://localhost:${porta} <-`);
});