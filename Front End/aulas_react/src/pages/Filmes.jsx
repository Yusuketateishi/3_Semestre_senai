import {Link ,useParams} from 'react-router-dom'

function Filmes() {
    const {id} = useParams();
    return (
        <div>
            <h1>Este é o Filmes: {id}</h1>
            <Link to={'/'}>Voltar para Principal</Link>
        </div>
    )
}

export default Filmes;