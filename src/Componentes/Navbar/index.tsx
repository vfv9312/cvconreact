import { NavLink } from "react-router-dom";
import { BsCodeSlash} from 'react-icons/bs';
import "./style.css";

function Navbar () {
    const textDecoration = ' underline underline-offser-4'
    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-2 px-8 text-sm font-light top-0 verdepastel">
            <ul className="flex items-center  gap-5">
                <li className=" font-semibold text-lg">
                    <NavLink
                    to='/'
                    className= {({isActive})=> isActive ? textDecoration : undefined }
                    >
                     <span><BsCodeSlash className=" absolute left-1 h-7 w-auto"/>Vladimir Farrera</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/habilidades'
                    className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                    Habilidades
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/proyectos'
                    className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                    Proyectos
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center">
            <li>
                    <NavLink
                    to='/blog'
                    className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                    Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;