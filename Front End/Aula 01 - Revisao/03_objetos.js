const pais = {
    "nome": "Brasil",
    "capital": "Brasília",
    "população": 2110000,
    "idioma": "Português",
    "regiâo": {
        "norte" : "AM / CP / RP",
        "sul" : "PR / SC / RS",
        "sudeste" : "RJ / MG / ES"
    }
};

console.log(pais.idioma);
console.log(pais.regiâo.norte);

let {nome, capital, população, idioma} = pais;
//ou
//let nome = pais.nome;
//let capital = pais.capital;
//let população = pais.população;
//let idioma = pais.idioma;