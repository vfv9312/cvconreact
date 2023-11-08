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
<Card titulos={'C5'} descripcion={'Desarrollado con Javascript, HTML y CSS, esta plataforma para estudiar en las auditoiras internas del C5. Datos de acceso usuario = CALLE911TGZ   contraseña = tuxtla'} imagen={C5} link={'https://vfv9312.github.io/vfv9312.git.io-C5/'} />
</div>
<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundtwo">
<Card titulos={'Rescata a la princesa'} descripcion={'Desarrollado en HTML, CSS y Javascript en este juego pasas por pasadisos y tienes que rescatar a una princesa'} imagen={Princesa} link={'https://vfv9312.github.io/taller-javascript-juego/'}/>
</div>
<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundthree">
<Card titulos={'Elementales'} descripcion={'Juego desarrollado con Javascript, HTML y CSS, este juego elijes un personaje y puedes lanzar un poder al contrincante el cual dependiendo el poder puedes ganar (agua le gana al fuego, el fuego le gana a la roca y la roca le gana al viento)'} imagen={Elemental} link={'https://vladi9312.000webhostapp.com/Juego%20elemental/Elementales.html'}/>
</div>

<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundfive">
<Card titulos={'Lista de actividades'} descripcion={'Creado en React Js, usando como lenguaje JavaScript en donde puedes crear listas tareas modificarlas o eliminarlas y palomiar en caso ya termines '} imagen={'https://media.licdn.com/dms/image/D4E2DAQFEPyYh35e57w/profile-treasury-image-shrink_800_800/0/1699048073927?e=1700035200&v=beta&t=NWkpB_Zs3yX8O7_sdKmonmMF1CQr9P6NSZxbbu6jOAo'} link={'https://vfv9312.github.io/RACT-TAREAS/'}/>
</div>

<div className=" absolute  inset-x-0 mx-auto imagen image_foregroundsix">
<Card titulos={'Lista de actividades'} descripcion={'Creado en React Native, usando como lenguaje TypeScript en donde se consume una api de pokemon para hacer una aplicacion movil de Pokedex en donde puedes guardar tus pokemones favoritos'} imagen={'https://media.licdn.com/dms/image/D4E2DAQEDC__DByNU8A/profile-treasury-image-shrink_1920_1920/0/1699078481837?e=1700035200&v=beta&t=5fdy36R_xsbFHE9wYthwqoaihJJpbsf6bLAFwe9mj9s'} link={'https://expo.dev/accounts/vfv9312/projects/pokedex/builds/9f1e0e02-41bc-421f-86b0-a450ca22de68'}/>
</div>

</div>
 );
}

export  {ImageMotionEffect};
