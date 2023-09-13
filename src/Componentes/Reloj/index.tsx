import { useState } from 'react';
import '../../App.css'




const Reloj = () => {
    let [hora, setHora] = useState('00:00:00');

function HoraDelReloj():void {
    
    let date:Date = new Date();
    date.toLocaleTimeString('en-US', { timeZone:'America/Mexico_City' });
    let hh:string | number = date.getHours();
    let mm:string | number = date.getMinutes();
    let ss:string | number = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time:string | number = hh + ":" + mm + ":" + ss;
    setHora(time);
}
setInterval(HoraDelReloj,1000)
    return(

<section className=' ver grid max-w-max h-auto place-items-center overflow-hidden'>
    <div className=' flex items-center sm:justify-center sm:w-60 sm:h-auto h-20 sm:border-4 border-solid border-[var(--color-secundario)] rounded-full text-[var(--color-secundario)] font-[1.75rem]'>
    <p>Chiapas,México <br/> {hora}</p>
    </div>

   
</section>




    );

}

export default Reloj;