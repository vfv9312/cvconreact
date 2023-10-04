
import Trabajos from "../../Componentes/Trabajos";
import { GlobalContext } from "../../Context";
import { useContext } from "react";




function Habilidades () {
    const {cambiarVariable,
        TemaClaro, 
        Temaoscuro,

     } = useContext(GlobalContext);
     const valoresClassdeSection = `flex flex-col ${cambiarVariable ? TemaClaro : Temaoscuro}`;

    return (
<section className={valoresClassdeSection }>
        <div className=" py-3 mb-8 text-2xl font-bold items-center text-center sm:text-7xl text-[--color-secundario]" >
            <h1>Hola</h1>
        </div>
        <article className=" items-center mx-8 text-justify sm:text-2xl text-[--color-secundario] mb-8 relative"> <p>Soy Vladimir Farrera Vera, un desarrollador Fullstack. Mis habilidades pricipales es el Frontend usando Javascript, Tyscript, HTML y CSS de manera conjunta usado Framework como React JS o React Native para desarrollar aplicaciones web y mobiles;
            asi mismo, tengo conocimientos de Backed con Java usando SpritBoot como Framework principal y base de datos como Mysql y Postgresql en los cuales continuo aprendiendo.<br/><br/>He completado mis conocimiento en cursos de bootcamp como plataformas de Platzi, Cursera, Udemy y BecasSantander para desarrollar mis proyectos personales; este portafolio hecho en React podran observar algunos de los proyectos que he realizado y que tengo en Github.<br/><br/>
            Actualmente estoy buscando oportunidades desafiantes para seguir creciendo como desarrollador.</p>
            <div className=" w-72 sm:w-96 h-9 rounded-lg bg-red-600 items-center absolute bottom-[-1] inset-x-0 mx-auto">
                <h1 className="text-white text-center self-center">Experiencia, certificaciones y mas</h1></div>
                </article>

            <Trabajos ></Trabajos>

        </section>
    );
}

export default Habilidades;