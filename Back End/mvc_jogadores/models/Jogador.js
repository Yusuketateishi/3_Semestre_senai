class Jogador {
    constructor(id, nome, pontuacao){
        if(!nome){
            throw new Error('Nome é obrigatorios')
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = pontuacao;
    }

    descricao(){
        return `${this.nome} - ${this.pontuacao}`
    }

    verificarPontuacao(){
        if(this.pontuacao <= 150) return "Iniciante";  
        if(this.pontuacao <= 350) return "Intermediário";  
        return "Avançado";  
    }

    AdicionarPontuacao(){
        this.pontuacao += 10;
    }

}

export default Jogador