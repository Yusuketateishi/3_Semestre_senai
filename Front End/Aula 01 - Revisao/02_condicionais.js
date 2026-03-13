const idade = 11;

if (idade >= 18) {
    console.log("Você é um adulto");
} else if (idade >= 12 && idade < 18) {
    console.log("Você é um adolecente");
} else if (idade < 12) {
    console.log("Você é uma criança");
}

//Operador ternário

let tema = 'dark';
let corFundo = 'white';

if (tema == 'dark') {
    corFundo = 'black';
} else {
    corFundo = 'white';
}
console.log(corFundo);

//condição           se verdadeira        senão
tema == 'dark' ? corFundo = 'preto' : corFundo = 'branco';

console.log(corFundo);
