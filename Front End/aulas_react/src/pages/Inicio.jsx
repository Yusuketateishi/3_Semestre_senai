import {Link ,useParams} from 'react-router-dom'

function Inicio() {
    return (
        <div>
            <h1>Bem-vindo</h1>
            <Link to={'/detalhes'}>Detalhes</Link>
        </div>
    )
}

export default Inicio;