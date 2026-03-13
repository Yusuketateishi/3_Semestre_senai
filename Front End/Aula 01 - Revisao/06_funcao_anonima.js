//Função nomeada
function saudacao(nome) {
    console.log(`Olá ${nome}`);
};

saudacao("M.Y.T");
//Função anônima
const saudacao2 = function (nome) {
    console.log(`Olá ${nome}`);
};
saudacao2("M.Y.T");

//Função nomeada Soma
function Soma(n1, n2) {
    const result = n1 + n2;
    return result
}

console.log(Soma(10,20));
//Função anônima Soma2
const Soma2 = function (n1, n2) {
    const result = n1 + n2;
    return result
}

console.log(Soma2(11,22));
