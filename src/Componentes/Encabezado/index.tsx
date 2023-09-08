
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp} from 'react-icons/io';
import 'animate.css';


const Encabezado = () => {
    return (

        <section className=" relative overflow-hidden h-72">
 
  <figure className="flex">
    <img className=" w-48 h-48 border-l-stone-950 rounded-full mx-11 animate__animated animate__backInDown" src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t1.6435-9/86461782_3324039157613227_1587997851990884352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGYz5jOMYikpUge9UPhtnyboaNHaxJOCFiho0drEk4IWNb8-vJCYMOEHLIHpqqOB1HAYWwESCsplw3jg3Faxs_Z&_nc_ohc=MqZyoRmxj4sAX9d0hDG&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfBSWRH9cw12U9btbO28H9B8B7g6ZCYx6IOBxY8oEDdPPQ&oe=652245E1"/>
    <div>
      <h1 className=' text-center text-2xl  font-bold text-violet-50 text'>Contacto</h1>
      <span><AiFillLinkedin color="white" className =" h-11 w-auto cursor-pointer"/></span>
      <span><MdEmail color="white" className=" h-11 w-auto cursor-pointer"/></span>
      <span><IoLogoWhatsapp color="white" className="h-11 w-auto cursor-pointer"/></span>
      <span><AiFillGithub color="white" className="h-11 w-auto cursor-pointer "/></span>
    </div>
  </figure>
        <article className="mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="grid row-span-2">
            <h2 className=" text-4xl font-bold tracking-tight text-lime-600 text sm:text-6xl  animate__animated  animate__flip">Lic. Vladimir Farrera Vera</h2>
            </div>

        </article>

      </section>
    
    );

}

export default Encabezado;