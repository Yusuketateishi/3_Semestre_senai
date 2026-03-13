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
}

class PessoaJuridica extends Pessoa{
    constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj
    }
}

const ana = new PessoaFisica("Ana","123.456.789.12");
console.log(ana.apresentar());

const sesi = new PessoaJuridica("SESI - Andradina","12.345.678/0001-90")
console.log(sesi.apresentar());


class bruxo{
    nome2;
    idade;
    constructor(nome2, idade){
        this.nome2 = nome2;
        this.idade = idade;
    }

    apresentar(){
        return `${this.nome2},${this.idade}`
    }
}

class BruxoAlto extends bruxo{
    constructor(nome2, idade, MagiaGrande){
        super(nome2, idade);
        this.MagiaGrande = MagiaGrande
    }
}

class BruxoBaixo extends bruxo{
    constructor(nome2, idade, MagiaPequena){
        super(nome2, idade);
        this.MagiaPequena = MagiaPequena
    }
}

const harry = new BruxoBaixo("Potter","17","Expressus");
console.log(harry.apresentar());
console.log(harry.MagiaPequena);

const dumbedor = new BruxoAlto("Dumbledor","89","?")
console.log(dumbedor.apresentar());
console.log(dumbedor.MagiaGrande);
