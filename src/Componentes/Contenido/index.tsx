import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import '../../App.css'
const Contenido = () => {
    return(

<section className=' h-full grid grid-cols-[2fr,_min-content] grid-rows-[1fr,1fr,1fr] bg-gradient-to-r from-purple-500 to-pink-500 '>
        <div className=' col-[1/2] row-[1/3] text-justify text-2xl self-center'> Mi nombre es Vladimir Farrera Vera, un desarrollador web, me e enfocado en Frontend usando Javascript, Tyscript, HTML y CSS; asi mismo, e usado Framework como React para desarrollar aplicaciones web.
He completado tomado varios cursos en bootcamp y en mi tiempo libre e practicado como este portafolio hecho en React y otros proyectos que tengo en Github.
Estoy buscando oportunidades desafiantes para seguir creciendo como desarrollador web.</div>
         <div className=' grid grid-cols-[repeat(1,_1fr)] sm:grid-cols-[repeat(3,_1fr)] sm:justify-items-center justify-items-start absolute top-0 right-0'>
            <div className=''><AiFillLinkedin  className =" h-11 w-11 cursor-pointer "/></div>
            <div className=''><MdEmail color="green" className=" h-11 w-auto cursor-pointer "/></div>
            <div className=' '><AiFillGithub color="black" className="h-11 w-auto cursor-pointer "/></div>
            </div>
            <footer className=' col-[1/3] row-[3/4]'>hola</footer>
         
</section>




    );

}

export default Contenido;