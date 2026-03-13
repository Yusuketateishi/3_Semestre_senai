class Pessoa {
    #documento
    constructor(nome, idade, documento){
        this.nome = nome;
        this.idade = idade;
        this.#documento = documento;
    }
    apresentar(){
        return `${this.nome},${this.idade}`
    }
    mostrarDocumento(){
        return this.#documento
    }
}
const pessoa1 = new Pessoa('marcelo', 17, 'Doc')
console.log(pessoa1.apresentar());
console.log(pessoa1.mostrarDocumento());


class Bruxo {
    #nivelEnergia
    //criando o metodo construtor
    constructor(nome,idade,feitico,casa,nivel_magia,nivelEnergia){
    this.nome = nome;
    this.idade = idade;
    this.feitico = feitico;
    this.casa = casa;
    this.nivel_magia = nivel_magia;
    this.#nivelEnergia = nivelEnergia;
    }
    verEnergia(){
        return this.#nivelEnergia
    }
    recarregarEnergia(){
        return `${this.#nivelEnergia += 10}`
    }
    lançarFeitico(){
        return `${this.#nivelEnergia -= 10}`
    }
}
const bruxo1 = new Bruxo('Harry',18,'abra Kadabra',"slytherin",1,100);
console.log(bruxo1.verEnergia());
console.log(bruxo1.recarregarEnergia());
console.log(bruxo1.lançarFeitico());
