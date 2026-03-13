import Livro from '../models/Livro.js'

//vetor de objetos de livros
let listaLivros = [
    new Livro(1, "Leviathan", "Project Moon", 20),
    new Livro(2, "Wonderlabs", "Project Moon", 54),
    new Livro(3, "Distortion Detective", "Project Moon", 42)
]

const livroController = {
    listar: (req, res) => {
        res.render('livros.ejs', {livros: listaLivros})
    },
    adicionar: (req, res) => {
        const {titulo, autor , paginas} = req.body;

        try{
            //Construção de um novo objeto, utilizando a classe livro
            const novoLivro = new Livro(listaLivros.length + 1, titulo, autor, Number(paginas));
            listaLivros.push(novoLivro);
            res.redirect('/livros')
        }catch(e){
            res.status(400).render('livros.ejs', {lista: listaLivros, erro: e.message})
        }
    },
    //Confirmar que o livro foi lido
    marcarComoLido: (req, res) => {
        const {id} = req.body;
        const livro = listaLivros.find(l => l.id === Number(id))
        livro.marcarComoLido();
        res.redirect('/livros');
    }
}

export default livroController;