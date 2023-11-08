import { useContext } from "react";
import Reloj from "../../Componentes/Reloj";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss ,BiLogoHtml5, BiLogoCss3,BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { SiVite, SiMysql } from "react-icons/si";
import { DiGit } from "react-icons/di";
import Imagen from '../../assets/mobile.svg';
import Perfil from '../../assets/yo.jpeg';
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
            <img className=" justify-items-center  w-48 h-48 border-l-stone-950 rounded-full  animate__animated animate__backInDown" src={Perfil}/>
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
            <FaReact color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id:'0',tituloText:'React', imagen:'Cuento con 3 certificados en React Native y 3 en React Js en la plataforma Platzi en el cual continúo aprendiendo',experiencia:'He creado una aplicacion movil con React Native en donde utilizo una api de pokemones para crear un pokedex donde podemos guardar eliminar o quitar de nuestros pokemones favoritos; asi mismo este portafolio esta hecho en React Js con Tailwind',conocimiento:'useState, Portals, Componentes, useEffect, useContext, Typescript, JavaScript consumo de Apis y uso de algunas librerias complementarias '}]);}} /> 
            <SiVite color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Vite', imagen:'2 certificados donde aprendi a usar Vite junto con React para implementar aplicacionciones web',experiencia:'Cree una aplicacion donde uso una api para emular el funcionamiento de una tienda online con React Js',conocimiento:'Entorno de vite'}]);}}/>
            <BiLogoHtml5 color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'HTML5', imagen:'Un aproximado de 4 certificados en Platzi sin contar que ya contaba con experiencia desde la Universidad',experiencia:'Creacion de una aplicacion para el trabajo donde se puede estudiar para las auditorias y muchos otros proyectos en Fronted en donde se ocupa',conocimiento:'Etiquetas, importacion de tipografias, e implementacion junto con otras herramientas o Framework'}]);}}/>
            <BiLogoCss3 color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'CSS3', imagen:'Un aproximado de 4 certificados en Platzi sin contar que ya contaba con experiencia desde la universidad',experiencia:' En multiplis aplicaciones en donde he trabajado en Fronted he implementado CSS hasta en ReactNative donde la sitaxis es parecida',conocimiento:'Flex, Grid, animacion,'}]);}}/>
            <BiLogoJavascript color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Javascript', imagen:'3 Certificados en el Lenguaje de JavaScript',experiencia:'Creacion de multiples proyecto desde minijuegos hasta paginas para administrar cursos para las capacitaciones',conocimiento:'Fundamentos JavaScript, Programacion Orientado a Objetos, Framework, consumo de Apis'}]);}}/>
            <BiLogoTypescript color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Typscript', imagen:'3 Certificados en Plantzi',experiencia:'Creacion de este portafolio en React JS y creacion de una aplicacion movil utilizando React Native',conocimiento:'Fundamentos TypeScript, Programacion Orientado a Objetos, Framework, consumo de Apis'}]);}}/>
            <BiLogoTailwindCss color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Tailwind', imagen:'2 Certificados en Platzi',experiencia:'',conocimiento:''}]);}}/>
            </div>
            <div className=' col-[2/3]'>
              <h1 className=' text-white'>Backed</h1>
              <BiLogoSpringBoot color="var(--color-secundario)" className="h-11 w-auto cursor-pointer" onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'SpringBoot', imagen:'Ninguna certificación',experiencia:'He trabajado poco pero he apoyado hen algunas partes de logica ',conocimiento:'Ningun proyecto completo'}]);}}/>
              <BiLogoJava color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Java', imagen:'2 certificados en Platzi sin mencionar que ya tenia conocimientos de la universidad',experiencia:'Programas de logica en POO para la escuela y algunas funciones en el trabajo',conocimiento:'Fundamentos de Java, Programación Orientado a Objetos'}]);}}/>
              <BiLogoPostgresql color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Postgret', imagen:'Conocimiento en SQL',experiencia:'',conocimiento:''}]);}}/>
              <SiMysql color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Mysql', imagen:'2 Certificados en Platzi y conocimiento anterior por la unversidad',experiencia:'En algunos proyectos escolares de tiendas y otros servicios',conocimiento:'Tablas, permisos de usuario, Trigger, Vistas, Diagrama Entidad Relacion'}]);}}/>
            </div>
            <div>
            <h1 className=' text-white'>Otros</h1>
            <DiGit color="var(--color-secundario)" className="h-11 w-auto cursor-pointer " onClick={() => {setOpenModal(!openModal); setTitulo ([{id: '0',tituloText:'Git', imagen:'Conocimiento al utilizar la herramienta',experiencia:'Todos los proyecyos que realizado a partir del 2022 comence a guardarlos en GitHub',conocimiento:' Creaciones de repositorios, Creacion de ramas, versiones, etc'}]);}}/>
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