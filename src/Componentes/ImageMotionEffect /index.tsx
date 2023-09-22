import { useContext } from "react";
import { GlobalContext } from "../../Context";
import Imagetwo from '../../assets/potionRed.png'
import Imageone from '../../assets/potionGreen.png'
import Imagefour from '../../assets/map.png'
import  Cat  from "../../assets/Juego-Gatos.png";
import  C5  from "../../assets/C5.png";
import  Elemental  from "../../assets/elementales.png";
import  Princesa  from "../../assets/princesa.png";
import'../../App.css'
import { Card } from "../Card";



const ImageMotionEffect = () => {



    const {cambiarVariable,
       TemaClaro, 
       Temaoscuro,
    }:{cambiarVariable:boolean; TemaClaro:string;Temaoscuro:string;} = useContext(GlobalContext)
    
 return(
<div className={`parallax-container w-full h-screen overflow-x-hidden overflow-y-scroll relative ${cambiarVariable ? TemaClaro : Temaoscuro}`}>
<div className="imagen absolute  inset-x-0 mx-auto image-background sm:h-auto h-[1500px] w-full ">

</div>
<div className="imagen absolute  inset-x-0 mx-auto  image-middle h-full w-full">
  <div className="card-one w-96 h-auto absolute"> <img src='https://i.ibb.co/vJdbRkj/Alice.png'></img></div>
  <div className="card-two w-96 h-auto absolute"><img src={Imageone} /></div>
  <div className="card-three h-auto w-96 absolute"><img src={Imagetwo}></img></div>
  <div className="card-four h-auto w-96 absolute"><img src={Imagefour}></img></div>
</div>
<div className=" absolute inset-x-0 mx-auto imagen w-72 h-40 image_foreground ">
 <Card titulos={'Atrapando Gatos'} descripcion={'Desarrollado con HTML y CSS, se trata de un juego donde tienes que atrapar todos los gatos,los cuales estan hechos con div'} imagen={Cat} link={'https://vfv9312.github.io/Juego-puntos/contexto-de-apilamiento.html'}/>
</div>
<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundone">
<Card titulos={'C5'} descripcion={'Desarrollado con Javascript, HTML y CSS, esta plataforma ayudara a encontrar'} imagen={C5} link={'https://vfv9312.github.io/vfv9312.git.io-C5/'} />
</div>
<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundtwo">
<Card titulos={'Rescata a la princesa'} descripcion={'En este juego pasas por pasadisos y tienes que rescatar a una princesa'} imagen={Princesa} link={'https://vfv9312.github.io/taller-javascript-juego/'}/>
</div>
<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundthree">
<Card titulos={'Elementales'} descripcion={'Juego desarrollado con Javascript, HTML y CSS, este juego elijes un personaje y puedes lanzar un poder al contrincante el cual dependiendo el poder puedes ganar (agua le gana al fuego, el fuego le gana a la roca y la roca le gana al viento)'} imagen={Elemental} link={'https://vladi9312.000webhostapp.com/Juego%20elemental/Elementales.html'}/>
</div>

</div>
 );
}

export  {ImageMotionEffect};
