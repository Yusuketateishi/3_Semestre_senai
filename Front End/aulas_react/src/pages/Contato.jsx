import {Link ,useParams} from 'react-router-dom'

function Contato() {
    return (
        <div>
            <h1>Entre em Contato</h1>
            <Link to={'/'}>Voltar para Principal</Link>
        </div>
    )
}

export default Contato;