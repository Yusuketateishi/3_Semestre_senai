import express from 'express';

const app = express();

app.use('/dogs', express.static('public'));

//criação do primeiro endpoint
app.get('/',async(req, res) => {
    res.status(200).json("API Funcionando");
})

//criando novo endpoint para consumir dados da API VIACEP
// app.get('/cep/:codigo', async(req, res) => {
//     const codigo = req.params.codigo;

//     //metodo fetch é o mensageiro que vai ate outra api e traz a resposta
//     const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json`);
//     const dados = await resposta.json();

//     res.status(201).json(dados);
// })

app.get('/starwars/:id', async(req,res) => {
    const id = req.params.id;
    
    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
    const dados = await resposta.json();

    const nome = dados.name;
    const altura = dados.height;
    const peso = dados.mass;
    const cor_dos_olhos = dados.eye_color;

    //res.json(dados)
    res.json({nome, altura, peso, cor_dos_olhos})
})

app.get('/dog/:id',async (req,res) => {
    const {id} = req.params;
    const url = `https://http.dog/${id}.jpg`

    res.json({url});
})


const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando http://localhost:${porta}`);
})