const Aula09_Nome = ({nome, index, excluir}) => {
    return (
        <div>
        <span> 
            {nome} 
            <button onClick={excluir}>Excluir</button>
        </span>
        </div>
    )
}

export default Aula09_Nome