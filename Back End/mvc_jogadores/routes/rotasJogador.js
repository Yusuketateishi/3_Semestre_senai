import express from 'express';
import JogadorController from '../controllers/JogadorController.js'

const router = express.Router();

//rota para listar os livros
router.get('/Jogador', JogadorController.listar);

//rota para adicionar livros
router.post('/Jogador', JogadorController.adicionar);

//rota para marcar como lido
router.post('/Jogador/AdicionarPontuacao', JogadorController.AdicionarPontuacao);

export default router;