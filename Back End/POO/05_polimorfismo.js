class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome
    }
    apresentar(){
        return `${this.nome}`
    }
}

class PessoaFisica extends Pessoa{
    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf
    }

    apresentar(){
        return `${this.nome}, meu CPF ${this.cpf}`
    }
}

class PessoaJuridica extends Pessoa{
    constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj
    }
    apresentar(){
        return `${this.nome}, meu CPF ${this.cnpj}`
    }
}

const ana = new PessoaFisica("Ana","123.456.789.12");
console.log(ana.apresentar());

const sesi = new PessoaJuridica("SESI - Andradina","12.345.678/0001-90")
console.log(sesi.apresentar());

const pessoaaaa = new Pessoa("Aleatorio","214,324,234-12")
console.log(pessoaaaa.apresentar());

///////////////////////////////////////////////////////////////////////////////////////
class Bruxo {
    nome;
    nivelMagia;
    feitico;
    #nivelEnergia
    //criando o metodo construtor
    constructor(nome,feitico,nivelMagia,nivelEnergia){
    this.nome = nome;
    this.feitico = feitico;
    this.nivelMagia = nivelMagia;
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
    apresentar(){
        return `${this.nome},${this.nivelMagia}`
    }
    feiticoAssinatura(){
        return `${this.feitico}`
    }
}

class BruxoDaGrifinonia extends Bruxo{
    constructor(nome,nivelMagia,feitico,casa){
        super(nome,nivelMagia,feitico);
        this.casa = casa;
    }
    apresentar(){
        return `Olá ${this.nome}, da casa ${this.casa} e de nivel ${this.nivelMagia}`
    }
    feiticoAssinatura(){
        return `Olá ${this.nome} de magia ${this.feitico}`
    }
}


class BruxoDaSonserina extends Bruxo{
    constructor(nome,nivelMagia,feitico,casa){
        super(nome,nivelMagia,feitico);
        this.casa = casa;
    }
    apresentar(){
        return `Olá ${this.nome}, da casa ${this.casa} e de nivel ${this.nivelMagia }`
    }
    feiticoAssinatura(){
        return `Olá ${this.nome} de magia ${this.feitico}`
    }
}

const bruxo1 = new BruxoDaGrifinonia("Magico","baixo","abra kadraba","Grifinonia");
console.log(bruxo1.apresentar());
console.log(bruxo1.feiticoAssinatura());
const bruxo2 = new BruxoDaSonserina("Feiticeiro","medio","kidneysstone","Sonserina");
console.log(bruxo2.apresentar());
console.log(bruxo2.feiticoAssinatura());