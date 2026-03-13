import { useState } from "react"

const Aula06_calculadora = () => {
    const [valor1,setValor1] = useState('')
    const [valor2,setValor2] = useState('')
    const [operador,setOperador] = useState('+')
    const [resultado,setResultado] = useState('')

 function Calculo() 
     {
        if (operador == '+') {
        setResultado(Number(valor1) + Number(valor2))
    } else if (operador == '-') {
        setResultado(valor1 - valor2)
    }else if (operador == 'x') {
        setResultado(valor1 * valor2)
    } else if (operador == '/') {
        setResultado(valor1 / valor2)
    } else if (operador == '**') {
        setResultado(valor1 ** valor2)
    }
}

    return (
        <div>
            <h2>Calculadora</h2>
            <input type="number" onChange={(event) => setValor1(event.target.value)} value={valor1}/>
            <input type="number" onChange={(event) => setValor2(event.target.value)} value={valor2}/>
            <select onChange={(event) => setOperador(event.target.value)} value={operador}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value="/">/</option>
                <option value="**">**</option>
            </select>
            <button onClick={Calculo}>=</button>
            <p>Seu resultado é {resultado}</p>
        </div>
    )
}

export default Aula06_calculadora