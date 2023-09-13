import { useRoutes , BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import {GlobalProvider} from "./Context";
import { Contactame } from "./Componentes/Contactame";
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
  {path:'/' ,element: <Principal/>},
]);
return ruta;
}


function App() {


  return (
<GlobalProvider>
    <BrowserRouter>
    <Navbar/>
    <AppRutas/>
    <Contactame/>
    </BrowserRouter>
</GlobalProvider>

  )
}

export default App
