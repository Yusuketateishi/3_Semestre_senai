import Jogador from '../models/Jogador.js'

//vetor de objetos de livros
let listaJogador = [
    new Jogador(1, 'Yuske', 100),
    new Jogador(2, 'Don Quixote', 1200),
    new Jogador(3, 'Heathcliff', 340)
]

const JogadorController = {
    listar: (req, res) => {
        res.render('Jogador.ejs', {Jogador: listaJogador})
    },
    adicionar: (req, res) => {
        const {nome, pontuacao} = req.body;

        try{
            //Construção de um novo objeto, utilizando a classe livro
            const novoJogador = new Jogador(listaJogador.length + 1, nome, Number(pontuacao));
            listaJogador.push(novoJogador);
            res.redirect('/Jogador')
        }catch(e){
            res.status(400).render('Jogador.ejs', {lista: listaJogador, erro: e.message})
        }
    },
        //Confirmar que o livro foi lido
    AdicionarPontuacao: (req, res) => {
        const {id} = req.body;
        const Jogador = listaJogador.find(l => l.id === Number(id))
        Jogador.AdicionarPontuacao();
        res.redirect('/Jogador');
    }
}

export default JogadorController;