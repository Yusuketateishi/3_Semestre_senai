const Aula04_Jogos = ({capa, titulo, genero}) => {
    return (
        <div>
            <div style={estilos.box}>
                <img style={estilos.img} src={capa} alt="imagem" />
                <h3>{titulo}</h3>
                <p>Genero: {genero}</p>
                <button style={estilos.botao}>Jogar</button>
            </div>
        </div>
    )
}

/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    botao: {
        width: '100%',
        backgroundColor: '#054f77',
        color: '#fff',
        padding: 3,
        border: 0,
        borderRadius: 4
    },
    box: {
        padding: '16px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
        borderRadius: '8px',
        border: '1px solid #ccc',
        textAlign: "center",
        maxWidth: '250px'
        
    },
    img: {
        width: '100%',
        height: '300px',
        borderRadius: 4
    }
}
export default Aula04_Jogos;