import { useState } from "react";
import "../../App.css"

// Define una interfaz para describir la estructura de un certificado
interface Certificado {
    Titulo: string;
    Link: string;
  }
  
  // Define una interfaz para describir la estructura del objeto de certificados
  interface Certificados {
    Frontend: Certificado[];
    Backend: Certificado[];
    Otros: Certificado[];
  }
  

const Trabajos = () => {

    let [Certificados]= useState<Certificados[]>(
        [
            {Frontend : [
                {Titulo:'Curso Práctico de HTML y CSS - Platzi',Link:'https://platzi.com/p/vfv9312787/curso/1758-course/diploma/detalle/'},
                {Titulo : 'Grid - Platzi', Link: 'https://platzi.com/p/vfv9312787/curso/2474-css-grid/diploma/detalle/'},
                {Titulo : 'Flex - Platzi',Link: 'sssss'},
                {Titulo : 'Curso de Programación Orientada a Objetos con JavaScript - Platzi', Link: 'https://platzi.com/p/vfv9312787/curso/2332-course/diploma/detalle/'},
                {Titulo: 'Curso de TypeScript: Tipos Avanzados y Funciones - Platzi', Link:'https://platzi.com/p/vfv9312787/curso/2879-typescript-tipos-avanzados/diploma/detalle/' },
                {Titulo : 'Curso de React.js con Vite.js y TailwindCSS - Platzi', Link:'https://platzi.com/p/vfv9312787/curso/7396-course/diploma/detalle/'}],
            Backend:[
                {Titulo:'Java',
                Link:'ssss'}],
            Otros : [
                {Titulo: 'Marketing Digital - University of Chicago',
                Link:'https://www.credential.net/25ad329f-a4ad-4562-b88c-038180bd9bda?fbclid=IwAR2iETVtZt17IAp1Ujr7q1RF2hf1fKShyvyGMk0aTDUPBE7i1Bxxh3ujsnY'},
                {Titulo:'Aspectos básicos de la asistencia técnica - Google', Link:'https://www.coursera.org/account/accomplishments/certificate/8SUQT25GQJUC'},
                {Titulo: 'Google IT Support - Spanish', Link:'https://www.coursera.org/account/accomplishments/specialization/certificate/BMLBALME9P56'},
                {Titulo: 'Los bits y bytes de las redes informáticas - Google', Link :'https://www.coursera.org/account/accomplishments/certificate/SUMXB2TTH6EE'},]
            },
]
    );

    return(
<section className=" h-full w-full grid sm:grid-cols-[1fr,minmax(200px,_1fr)] grid-rows-[1fr,minmax(300px_1fr,1fr)]  place-content-center text-justify gap-y-6 text-[--color-secundario]  " >
<div className="h-full py-5 px-8 w-[minmax(100px,500px)] border-8 border-solid border-zinc-400 col-[1/3] row-[1/2]">
<h1 className="font-extrabold text-xl">Experiencia Laboral</h1>
<h2>Dirección Estatal de Coordinación, Control, Comando, Comunicación y Cómputo (C5) </h2>
<h3>Tiempo laborado : Julio 2017 a la actualidad</h3>
<h3>Puestos : </h3><br/>

<li>Programador : Fronted (HTML, CSS, Javascript y API REST) (1 año)</li><br/>
<li>Operador Interviniente : Operador de atencion a la linea de emergencia 9-1-1 (1 año)</li><br/>
<li>Radio Operador : Operador de radio frecuencia para pasar los reportes a las corporaciones poliacas y medicas (7 meses)</li><br/>
<li>Operador de Medios de Información : Crear notas informativas sobre incidentes relevantes como homicidios, robos, accidentes vehiculares relevantes (3 año)</li><br/>
<li>Editor de videos : Edición de videos sobre seguimientos de hechos delictivos o presentaciones (1 año)</li><br/>
</div>
<div className="px-8 ">
    <h1 className=" font-extrabold text-xl ">Estudios</h1>
<h2>Universidad Autonoma de Chiapas</h2>
<h2>Licenciatura en Sistemas Computacionales</h2> <h3>(Titulado)</h3>
<p>Tiempo cursado : 2012 a 2017</p>
</div>
<div className="px-8 col-[1/3] row-[3/4] sm:row-[2/3] sm:col-[2/3] grid gap-5 ">
    <h1 className="font-extrabold text-xl">Certificados</h1>
    <div>
      {Certificados.map((categoria, index) => (
        <div key={index}>
          <h2 className=" py-5">Frontend</h2>
          <ul>
            {categoria.Frontend.map((certificado, subIndex:number) => (
              <li key={subIndex}>
                <strong>Título:</strong> <a href={certificado.Link}>{certificado.Titulo}</a>
              </li>
            ))}
          </ul>
          <h2 className=" py-5">Backend</h2>
          <ul>
            {categoria.Backend.map((certificado, subIndex:number) => (
              <li key={subIndex}>
                <strong>Título:</strong> <a href={certificado.Link}>{certificado.Titulo}</a>
                
              </li>
            ))}
          </ul>
          <h2 className=" py-5">Otros</h2>
          <ul>
            {categoria.Otros.map((certificado, subIndex:number) => (
              <li key={subIndex}>
                <strong>Título:</strong> <a className=" cursor-pointer mb-44" href={certificado.Link}>{certificado.Titulo}</a>
                
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
</div>
</section>
    );
}
export default Trabajos;