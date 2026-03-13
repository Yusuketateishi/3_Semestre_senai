import { useState } from "react"

const Aula06_Placar = () => {
    const[placar1, setPlacar1] = useState(0)
    const[placar2, setPlacar2] = useState(0)
    
    

    return (
        <div>
            <h2>Placar Eletrônico</h2>
            <p>Futebol</p>
            <h2>
                Nº {placar1}
            </h2>
            <button onClick={() => setPlacar1(placar1 + 1)}>+1 ponto</button>
            <h2>
                Nº {placar2}
            </h2>
            <button onClick={() => setPlacar2(placar2 + 1)}>+1 ponto</button>

            <hr />
            <p>Basquete</p>
            <h2>
                Nº {placar1}
            </h2>
            <button onClick={() => setPlacar1(placar1 + 1)}>+1</button>
            <button onClick={() => setPlacar1(placar1 + 2)}>+2</button>
            <button onClick={() => setPlacar1(placar1 + 3)}>+3</button>
            <button onClick={() => setPlacar1(0)}>Resetar</button>
            <h2>
                Nº {placar2}
            </h2>
            <button onClick={() => setPlacar2(placar2 + 1)}>+1</button>
            <button onClick={() => setPlacar2(placar2 + 2)}>+2</button>
            <button onClick={() => setPlacar2(placar2 + 3)}>+3</button>
            <button onClick={() => setPlacar2(0)}>Resetar</button>
        </div>
    )

}

export default Aula06_Placar