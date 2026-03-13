const Aula04_IMC = ({ nome, peso, altura, cor }) => {

    //let nome = "Osvaldo";
    //let peso = 80;
    //let altura = 1.80;
    let IMC = peso/(altura**2);

    return(
        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>Olá {nome}</p>
            <p>Altura: {altura}m</p>
            <p>Peso: {peso}Kg</p>
            <p>IMC: {IMC.toFixed(1)}Kg/m²</p>
        </div>
    )
}

export default Aula04_IMC;