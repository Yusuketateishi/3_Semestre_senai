class Pessoa {
    //criando o metodo construtor
    constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
    }
    //Atributos
}

const pessoa1 = new Pessoa('Claudia', 25);
console.log(pessoa1);


class Bruxo {
    //criando o metodo construtor
    constructor(nome,idade,feitico,casa,nivel_magia){
    this.nome = nome;
    this.idade = idade;
    this.feitico = feitico;
    this.casa = casa;
    this.nivel_magia = nivel_magia;
    }
    //Atributos
}

const bruxo1 = new Bruxo('Harry',18,'abra Kadabra',"slytherin",'basico');
console.log(bruxo1);
