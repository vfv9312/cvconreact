import './style.css'
import Filosofo from '../../assets/avion.png'
import Cielo from '../../assets/Clouds 7/1.png'
import Nube from '../../assets/Clouds 7/4.png'
import '../../App.css'
const Contenido = () => {
    return(

        <section className=".main-principal">
            <div className="imagen fondo ">
                
                    <img src={Cielo} className=" sm:h-96 sm:w-full" alt="fondocielo"/>    
            </div>
<div className='imagen movible2 animate'>
    <img
    src={Filosofo}
    alt="iMAGEN DE FILOSOFO"
    />
</div>
<div className="imagen movible1 text-3xl text-black font-bold">
Mi nombre es Vladimir Farrera Vera, un desarrollador web, me e enfocado en Frontend usando Javascript, Tyscript, HTML y CSS; asi mismo, e usado Framework como React para desarrollar aplicaciones web.

He completado tomado varios cursos en bootcamp y en mi tiempo libre e practicado como este portafolio hecho en React y otros proyectos que tengo en Github.

Estoy buscando oportunidades desafiantes para seguir creciendo como desarrollador web.
</div>

<div className='imagen movible3'>
    <img className='w-full h-96'
    src={Nube}
    />
</div>
</section>



    );

}

export default Contenido;