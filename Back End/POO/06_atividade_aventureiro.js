class Aventureiro {
    nome;
    idade;
    classe;
    poder;
    #objetivo
    //criando o metodo construtor
    constructor(nome,idade,classe,poder,objetivo){
    this.nome = nome;
    this.idade =idade;
    this.classe =classe;
    this.poder =poder;
    this.#objetivo = objetivo;
    }
    identificacao(){
        return `${this.nome},${this.idade},${this.classe},${this.poder}`
    }
    objetivoPessoal(){
        return `${this.objetivo}`
    }
}

class AventureiroDaOrdem extends Aventureiro{
    constructor(nome,idade,classe,poder,afinidade){
        super(nome,idade,classe,poder);
        this.afinidade = afinidade;
    }
    identificacao(){
        return `Olá aventureiro esses são os seus dados nome:${this.nome}, de ${this.idade}anos, sua classe é ${this.classe} e sua força é ${this.poder}`
    }
    AfinidadePessoal(){
        return `Olá ${this.nome} lembre que você contem afinidade com ${this.afinidade}`
    }
}

class AventureiroDoChaos extends Aventureiro{
    constructor(nome,idade,classe,poder,afinidade){
        super(nome,idade,classe,poder);
        this.afinidade = afinidade;
    }
    identificacao(){
        return `Olá aventureiro esses são os seus dados nome:${this.nome}, de ${this.idade}anos, sua classe é ${this.classe} e sua força é ${this.poder}`
    }
    AfinidadePessoal(){
        return `Olá ${this.nome} lembre que você contem afinidade com ${this.afinidade}`
    }
}

const aventureiro2 = new AventureiroDoChaos("Mathias",46,"Mago",3500,"Chaos")
const aventureiro1 = new AventureiroDaOrdem("Marco",28,"Guerreiro",2800,"Ordem")
const aventureiro3 = new AventureiroDaOrdem("Lilith",30,"Druida",2500,"Ordem")
const aventureiro4 = new AventureiroDoChaos("Benjamin",40,"Warlock",3600,"Chaos")
console.log(aventureiro1.identificacao());
console.log(aventureiro1.AfinidadePessoal());
console.log(aventureiro2.identificacao());
console.log(aventureiro2.AfinidadePessoal());
console.log(aventureiro3.identificacao());
console.log(aventureiro3.AfinidadePessoal());
console.log(aventureiro4.identificacao());
console.log(aventureiro4.AfinidadePessoal());
