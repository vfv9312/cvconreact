import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss ,BiLogoHtml5, BiLogoCss3,BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { SiVite, SiMysql } from "react-icons/si";
import { DiGit } from "react-icons/di";
import Imagen from '../../assets/mobile.svg'
import '../../App.css'
import 'animate.css';



const Encabezado = () => {
    return (

        <section className=" grid grid-cols-[1fr,1fr,1fr]  grid-rows-[1fr,1fr,1fr]   z-0 w-full max-h-screen relative perspective-20 overflow-x-hidden overflow-y-scroll bg-gradient-to-r from-[var(--color-primario)] to-[var(--color-tercero)]">
          <figure className='col-[1/4] row-[1/2] justify-self-center'>
            <img className=" justify-items-center  w-48 h-48 border-l-stone-950 rounded-full  animate__animated animate__backInDown" src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t1.6435-9/86461782_3324039157613227_1587997851990884352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGYz5jOMYikpUge9UPhtnyboaNHaxJOCFiho0drEk4IWNb8-vJCYMOEHLIHpqqOB1HAYWwESCsplw3jg3Faxs_Z&_nc_ohc=MqZyoRmxj4sAX9d0hDG&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfBSWRH9cw12U9btbO28H9B8B7g6ZCYx6IOBxY8oEDdPPQ&oe=652245E1"/>
            </figure>
          <figure className='col-[1/2] row-[3/4] absolute left-5 right-0 m-[0_auto] efecto1'>
          <img src={Imagen} className='  w-52 h-auto'></img>
          </figure>
          <article className=' z-10 text-center text-lg self-center col-[1/4]'>
          <h5 className="text-3xl text-white">Hola, soy</h5>
          <h1 className="text-4xl font-bold tracking-tight text-[--color-secundario] text sm:text-6xl  animate__animated  animate__rubberBand">Vladimir Farrera Vera</h1>
          <h5 className="text-light mt-4 text-white">Desarrollador FullStack</h5>
          </article>
          <div className=' grid grid-cols-[repeat(1,_1fr)] sm:grid-cols-[repeat(3,_1fr)] sm:justify-items-center justify-items-start absolute top-0 right-0'>
            <div className=''><AiFillLinkedin color="var(--color-secundario)" className =" h-11 w-11 cursor-pointer "/></div>
            <div className=''><MdEmail color="var(--color-secundario)" className=" h-11 w-auto cursor-pointer "/></div>
            <div className=' '><AiFillGithub color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/></div>
            </div>
            <figure className='grid grid-cols-3 justify-center col-[2/4]'>
            <h1 className=' col-[1/3] justify-self-center text-white text-center text-lg font-bold'>Habilidades</h1>
              <div className=' col-[1/2] m-[0_0_100px_0]'>
              <h1 className=' text-white'>Fronted</h1>
            <FaReact color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/> 
            <SiVite color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            <BiLogoHtml5 color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            <BiLogoCss3 color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            <BiLogoJavascript color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            <BiLogoTypescript color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            <BiLogoTailwindCss color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            </div>
            <div className=' col-[2/3]'>
              <h1 className=' text-white'>Backed</h1>
              <BiLogoSpringBoot color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
              <BiLogoJava color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
              <BiLogoPostgresql color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
              <SiMysql color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            </div>
            <div>
            <h1 className=' text-white'>Otros</h1>
            <DiGit color="var(--color-secundario)" className="h-11 w-auto cursor-pointer "/>
            </div>
            </figure>

       

      </section>
    
    );

}

export default Encabezado;