import { estilos } from "../style/Estilos"
import { useEffect, useState } from "react"

const Aula10 = () => {
    const [contador, setContador] = useState(0)

//O useEffect fica monitorando uma váriavel e executa a função sempre que ela sofre uma alteração
//Esse efeito sera alterado sempre que o contador mudar
useEffect(( ) => {
        console.log(contador);
        document.title = `Contagem: ${contador}`
    } , [contador])

    //O useEffect com as [] vazias significa que o efeito deve ser executado quando a página é carregada
useEffect(() => {
    const contadorSalvo = localStorage.getItem('valorContador') || 0;
    setContador(JSON.parse(contadorSalvo))
}, [])

    function botaoContador () {
        const novoContador = contador + 1
        setContador(novoContador)
        //Armazenando localmente nosso contador 
        localStorage.setItem('valorContador', JSON.stringify(contador))
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoContador} >Clique aqui</button>
        </div>
    )
}


export default Aula10