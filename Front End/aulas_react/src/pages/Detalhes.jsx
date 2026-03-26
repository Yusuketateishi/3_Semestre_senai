import {Link ,useParams} from 'react-router-dom'

function Detalhes() {
    return (
        <div>
            <h1>Mais Informações</h1>
            <Link to={'/contato'}>Contato</Link>
        </div>
    )
}

export default Detalhes;