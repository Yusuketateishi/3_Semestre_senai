import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Principal";
import Sobre from "./pages/sobre";
import NotFound from "./pages/NotFound";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import Detalhes from "./pages/Detalhes";
import Contato from "./pages/Contato";
import Filmes from "./pages/Filmes";

const App = () => {
return(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="*" element={<NotFound/>} />
        <Route path="/perfil/:nome" element={<Perfil/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/detalhes" element={<Detalhes/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/filmes/:id" element={<Filmes/>} />
    </Routes>
  </BrowserRouter>
)
}

export default App;