import "../../App.css"



const Card = ({titulos,imagen,descripcion,link}) => {

    return(
<section className="">
<div className="book  w-64 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
<div className=" w-48 h-full ml-10">
<p className="font-extrabold ">{titulos}</p>
      <p className=" text-justify">{descripcion}</p>
      </div>
  <a className=" self-end" href={link}>
  <button  className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Ir</button>
  </a>
   
<div className="cover ">

  <img className=" h-full w-full object-scale-down " src={(imagen)}></img>
</div>
</div>
</section>
    );
    
}
export {Card};