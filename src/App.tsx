import { useRoutes , BrowserRouter,} from "react-router-dom";
import {GlobalProvider} from "./Context";
import Principal from './Paginas/Principal';
import Navbar from './Componentes/Navbar';
import Acercade from './Paginas/Acerca de';
import NotFound from './Paginas/NotFound';
import Proyectos from './Paginas/Proyectos';
import Habilidades from './Paginas/Habilidades';
import './App.css'

const AppRutas = () => {
let ruta = useRoutes([
  {path:'/habilidades', element: <Habilidades/>},
  {path:'/proyectos', element:<Proyectos/>},
  {path:'/blog', element: <Acercade/>},
  {path:'/*', element: <NotFound/>},
  {path:'/cvconreact/' ,element: <Principal/>},
]);
return ruta;
}


function App() {


  return (
<GlobalProvider>
    <BrowserRouter>
    <Navbar/>
    <AppRutas/>
    
    </BrowserRouter>
</GlobalProvider>

  )
}

export default App
