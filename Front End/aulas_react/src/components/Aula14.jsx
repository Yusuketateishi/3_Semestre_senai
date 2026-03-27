import { estilos } from "../style/Estilos"
import { Link ,useNavigate} from "react-router-dom"

const Aula14 = () => {
    const navigate = useNavigate();
    return (
        <div style={estilos.cardAula}>
            <h2>Aula14 = React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr />
            <h3>Navegação com Links do React Router</h3>
            <Link to='/'> Página Principal</Link>
            <br />
            <Link to='/Sobre'> Página Sobre</Link>
            <br />
            <Link to='/ERRRRRRRRRROOOOORRRR'> Página Não Encontrada</Link>
            <br />
            <h3>Navegaçãocom programação utilizando o useNavigate</h3>
            <button onClick={() => navigate('/Sobre') }>Sobre</button>

            <hr />
            <h3>Rota dinâmica com useParams</h3>
            <button onClick={() => navigate('/perfil/Ricardo')}>Perfil do Ricardo</button>
            <button onClick={() => navigate('/perfil/Douglas')}>Perfil do Douglas</button>
            <hr />
            <h3>Páginas de Inicio, Detalhes e Contato</h3>
            <Link to='/inicio'> Página Inicial</Link>
            <br />
            <hr />
            <h3>Rota Filmes</h3>
            <button onClick={() => navigate('/filmes/1')}>Filme1</button>
            <button onClick={() => navigate('/filmes/2')}>Filme2</button>
            
        </div>
    )
}

export default Aula14