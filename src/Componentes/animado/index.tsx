import "./style.css"

import Cielo from './layers/sky.png';
import Cascada from './layers/rocks.png';
import PrimeraNube from './layers/clouds_1.png';
import 'animate.css';
function Animado() {
    return(
       
        <section className="main-seccion-principal ">
            <div className="imagen seccion-cielo ">
                
                    <img src={Cielo} className=" sm:h-96 sm:w-full" alt="fondocielo"/>
                    
            </div>
            <div className="imagen seccion-campo">
                
                <p className="mt-6 text-lg leading-8 text-gray-300 font-medium text">
              Contratame 😇
            </p>
                    <img src={Cascada}/>
               
            </div>
            <div className="imagen bottom-0  inset-x-0 mx-auto  seccion-nubes">
                <div className="derecha">
                    
                        <img src={PrimeraNube}/>
                </div>
                
            </div>
            <div className="flex justify-center items-center  h-[100%] transition-transform duration-800 transform w-auto">
            <img className=" w-48 h-48 border-l-stone-950 rounded-full  animate__animated animate__backInDown" src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t1.6435-9/86461782_3324039157613227_1587997851990884352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGYz5jOMYikpUge9UPhtnyboaNHaxJOCFiho0drEk4IWNb8-vJCYMOEHLIHpqqOB1HAYWwESCsplw3jg3Faxs_Z&_nc_ohc=MqZyoRmxj4sAX9d0hDG&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfBSWRH9cw12U9btbO28H9B8B7g6ZCYx6IOBxY8oEDdPPQ&oe=652245E1"/>
            <h2 className=" text-4xl font-bold tracking-tight text-lime-600 text sm:text-6xl  animate__animated  animate__flip">Lic. Vladimir Farrera Vera</h2><p>Oye haz scroll</p>
           
            </div>

            
            

        </section>
       
    );
    
}
export default Animado;