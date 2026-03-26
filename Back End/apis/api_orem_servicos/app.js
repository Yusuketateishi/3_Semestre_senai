import express from 'express';
//Importando o Banco de Dados
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js'
import rotasDepartamento from './src/routes/rotasDepartamento.js'
import rotasOrdemServicos from './src/routes/rotasOrdemServicos.js'

import swaggerUI from 'swagger-ui-express';
import documentacao from './config/swagger.js';
const app = express();
app.use(express.json());
//app.use('/swagger', swaggerUI.serve, swaggerUI.setup(documentacao))

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentacao));

// Adicione:
app.get('/swagger', (req, res) => {

res.send(`<!DOCTYPE html>

<html><head>

<title>API Ordens de Serviço</title>

<meta charset="utf-8"/>

<link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">

</head><body>

<div id="swagger-ui"></div>

<script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>

<script>

SwaggerUIBundle({

spec: ${JSON.stringify(documentacao)},

dom_id: '#swagger-ui'})

</script>

</body></html>`);

});


app.get('/', async (req, res) => {

await testarConexao();

// res.json("API Funcionando")

res.redirect('/swagger');

})

//Utilizando rotas
app.use(rotasUsuarios);
app.use(rotasDepartamento);
app.use(rotasOrdemServicos);



const porta = 3000;
app.listen(porta, () => {
    console.log(`-> http://localhost:${porta} <-`);
});
