import { NavLink } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsFillHouseDoorFill} from 'react-icons/bs';
import { FaBlogger } from "react-icons/fa";
import { AiOutlineBgColors } from "react-icons/ai";
import "../../App.css";
import { useContext } from "react";
import { GlobalContext } from "../../Context";



function Navbar () {
    const context = useContext(GlobalContext)
    const textDecoration = 'animate-pulse'
    
    return(
        
        <nav className="flex justify-items-center justify-between items-center fixed z-10 w-[350px] py-2 px-8 bottom-0  inset-x-0 mx-auto  border-double border-4 rounded-full  drop-shadow-lg bg-[var(--color-tercero)]">
            <ul className="flex items-center  gap-5">
                <li className=" font-semibold text-lg">
                    <NavLink
                    to='/cvconreact/'
                    className= {({isActive})=> isActive ? textDecoration : undefined }
                    >
                     <span><BsFillHouseDoorFill color="var(--color-secundario)" className=" h-9 w-auto hover:scale-110 transition-transform"/></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/habilidades'
                    className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                    <GiSkills color="var(--color-secundario)" className="h-9 w-auto hover:scale-110 transition-transform"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/proyectos'
                    className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                    <MdWork color="var(--color-secundario)" className="h-9 w-auto hover:scale-110 transition-transform"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/blog'
                    className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                    <FaBlogger color="var(--color-secundario)" className="h-9 w-auto hover:scale-110 transition-transform"/>
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center">
            <li onClick={() => {context.setCambiarVariable(!context.cambiarVariable)}}>
                    <AiOutlineBgColors color="var(--color-secundario)" className="h-9 w-auto hover:scale-110 transition-transform"/>
                </li>
            </ul>
        </nav>
        
    );
}

export default Navbar;