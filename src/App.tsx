import { useRoutes , BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
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
    
    <BrowserRouter>
    <Navbar/>
<AppRutas/>
</BrowserRouter>
  )
}

export default App
