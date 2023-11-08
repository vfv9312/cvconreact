import { useContext } from "react";
import { GlobalContext } from "../../Context";

function Acercade() {

    const {cambiarVariable,
        TemaClaro, 
        Temaoscuro,
     }:{cambiarVariable:boolean; TemaClaro:string;Temaoscuro:string;} = useContext(GlobalContext)

    return (

        <div className={`sm:text-7xl text-[--color-secundario]  w-full h-screen overflow-x-hidden overflow-y-scroll relative ${cambiarVariable ? TemaClaro : Temaoscuro}`}>
<div className=" mx-16">
           <h1 className=" mb-5"> Apuntes de Vladimir Farrera (Proximamente)</h1>
        <ul>
            <li>Git</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS y Tailwind</li>
            <li>React Js</li>
            <li>React Native</li>
            <li>Base de Datos</li>
            
        </ul>
        </div>
        </div>
    ) ;

}
export default Acercade;