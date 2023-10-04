import { useContext } from "react";
import Reloj from "../../Componentes/Reloj";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss ,BiLogoHtml5, BiLogoCss3,BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { SiVite, SiMysql } from "react-icons/si";
import { DiGit } from "react-icons/di";
import Imagen from '../../assets/mobile.svg'
import '../../App.css'
import 'animate.css';
import { GlobalContext } from "../../Context";
import { Modal } from "../Modal";





const Encabezado = () => {
  const {cambiarVariable,
     TemaClaro, 
     Temaoscuro,
      openModal,
    setOpenModal,
    titulo,
    setTitulo
  } = useContext(GlobalContext)
const valoresClassdeSection = `grid grid-cols-[1fr,2fr,2fr]  grid-rows-[1fr,1fr,1fr]   z-0 w-full max-h-screen relative perspective-20 overflow-x-hidden overflow-y-scroll ${cambiarVariable ? TemaClaro : Temaoscuro}`;


    return (

        <section className={valoresClassdeSection }>
          <figure className='col-[1/4] row-[1/2] justify-self-center'>
            <img className=" justify-items-center  w-48 h-48 border-l-stone-950 rounded-full  animate__animated animate__backInDown" src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t1.6435-9/86461782_3324039157613227_1587997851990884352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGYz5jOMYikpUge9UPhtnyboaNHaxJOCFiho0drEk4IWNb8-vJCYMOEHLIHpqqOB1HAYWwESCsplw3jg3Faxs_Z&_nc_ohc=MqZyoRmxj4sAX9d0hDG&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfBSWRH9cw12U9btbO28H9B8B7g6ZCYx6IOBxY8oEDdPPQ&oe=652245E1"/>
            </figure>
          <figure className='col-[1/2] row-[3/4] '>
          <img src={Imagen} className='  w-52 h-auto'></img>
          </figure>
          <article className=' z-10 text-center text-lg self-center col-[1/4]'>
          <h5 className="text-3xl text-white">Hola, soy</h5>
          <h1 className="text-4xl font-bold tracking-tight text-[--color-secundario] text sm:text-6xl  animate__animated  animate__rubberBand">Vladimir Farrera Vera</h1>
          <h5 className="text-light mt-4 text-white">Desarrollador FullStack</h5>
          <h1 className=' m-[30px_0_0_0] sm:m-[30px_0_10px_0] text-white text-center text-lg font-bold'>Habilidades</h1>
          </article>
          
            <figure className='grid grid-cols-3 justify-center col-[2/4]'>
              <div className=' col-[1/2] m-[0_0_120px_0]'>
              <h1 className=' text-white'>Fronted</h1>
            <FaReact color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id:'0',tituloText:'ReactJs', imagen:'3 Certificados en Platzi',experiencia:'',conocimiento:'State, Portals, Componentes, '}]);}} /> 
            <SiVite color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Vite', imagen:'Platzi',experiencia:'Tienda Online ',conocimiento:''}]);}}/>
            <BiLogoHtml5 color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'HTML5', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
            <BiLogoCss3 color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'CSS3', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
            <BiLogoJavascript color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Javascript', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
            <BiLogoTypescript color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Typscript', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
            <BiLogoTailwindCss color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Tailwind', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
            </div>
            <div className=' col-[2/3]'>
              <h1 className=' text-white'>Backed</h1>
              <BiLogoSpringBoot color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'SpringBoot', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
              <BiLogoJava color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Java', imagen:'Platzi',experiencia:'Platzi',conocimiento:''}]);}}/>
              <BiLogoPostgresql color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Postgret', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
              <SiMysql color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Mysql', imagen:'Platzi',experiencia:'Platzi',conocimiento:''}]);}}/>
            </div>
            <div>
            <h1 className=' text-white'>Otros</h1>
            <DiGit color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Git', imagen:'Platzi',experiencia:'',conocimiento:''}]);}}/>
            </div>
            </figure>
            <section className=" absolute top-0">
              <Reloj/>
            </section>

     {openModal &&   <Modal>
      
          <button className=" absolute top-4 right-4"  onClick={() => {setOpenModal(!openModal)}}>X</button>
          <div className=" flex flex-col">
          <h1 className=" text-7xl font-bold py-5">{titulo[0].tituloText}</h1>
          <h1 className=" text-2xl">Certificados</h1>
          <p>{titulo[0].imagen}</p>
          <h1 className=" text-2xl">Experiencia</h1>
          <p>{titulo[0].experiencia}</p>
          <h1 className=" text-2xl">Conocimiento</h1>
          <p>{titulo[0].conocimiento}</p>
          </div>
        </Modal>}

      </section>
    
    );

}

export default Encabezado;