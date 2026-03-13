//Criando nossa primeira classe
class Pessoa {
    //Atributos
    nome;
    idade;
}

//criando um novo objeto(instância)
const pessoa1 = new Pessoa ();
console.log(pessoa1);

//Aplicando valores aos atributos
pessoa1.nome = "Carl";
console.log(pessoa1);
console.log(pessoa1.nome);
pessoa1.idade = 30;
console.log(pessoa1.idade);

const pessoa2 = new Pessoa ();
pessoa2.nome = 'Marcelo';
pessoa2.idade = 17;
console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.idade);



