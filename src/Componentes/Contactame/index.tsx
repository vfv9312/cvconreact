import React from "react";
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


function Contactame():JSX.Element {
    return(
        <React.Fragment>
            <div className=' grid grid-cols-[repeat(1,_1fr)] sm:grid-cols-[repeat(3,_1fr)] sm:justify-items-center justify-items-start absolute top-0 right-0'>
            <div className=''><a href="https://www.linkedin.com/in/vladimir-farrera-vera-0532b313b/"><AiFillLinkedin color="var(--color-secundario)" className =" h-11 w-11 cursor-pointer hover:scale-110 transition-transform"/></a></div>
            <div className=''><MdEmail color="var(--color-secundario)" className=" h-11 w-auto cursor-pointer hover:scale-110 transition-transform"/></div>
            <div className=' '><a href="https://github.com/vfv9312"><AiFillGithub color="var(--color-secundario)" className="h-11 w-auto cursor-pointer hover:scale-110 transition-transform"/></a></div>
            </div>
        </React.Fragment>
    );
}

export {Contactame};