import { estilos } from "../style/Estilos";
import { useState } from "react"

const Aula07_Perfil = ({foto,nome}) => {
    

    return (
        <div style={{
            display:'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 10, 
            border: '1px solid #ccc',
            padding: 20, 
            width: 220,
            boxShadow: '0 4px 10px rgba(0,0,0,0)',
            borderRadius:12,
            margin:10
            }}>
            <Avatar foto={foto}/>
            <InfoUsuario nome={nome}/>
            <BotaoSeguir/>
        </div>
    )
}

export const Avatar = ({foto}) => {
    return (
        <img style={estilos.img} src={foto} alt="img" />
    )
}

export const InfoUsuario = ({nome}) => {
    return (    
        <p style={estilos.titulo}>{nome}</p>
)
}

export const BotaoSeguir = () => {
    const [visivel, setVisivel] = useState('')
    return (

        <button style={{
            backgroundColor: visivel == false ? '#43ea23' : '#47ea66',
            color: "#fff",
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8
        }} onClick={() => setVisivel(!visivel)}>
            { visivel == false ? <p> Seguir </p> : <p> Seguindo </p> }
        </button>
        
    )
}

export default Aula07_Perfil