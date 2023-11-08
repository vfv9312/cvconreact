import React from "react";
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {  AiOutlineWhatsApp } from "react-icons/ai";


function Contactame():JSX.Element {
    return(
        <React.Fragment>
            <div className=' grid grid-cols-[repeat(2,_1fr)] sm:grid-cols-[repeat(3,_1fr)] sm:justify-items-center justify-items-start absolute top-0 right-0'>
            <div className=''><a href="https://www.linkedin.com/in/vladimir-farrera-vera/"><AiFillLinkedin color="var(--color-secundario)" className =" h-11 w-11 cursor-pointer hover:scale-110 transition-transform"/></a></div>
            <div className=''><a href="mailto:vfv9312@gmail.com"><MdEmail color="var(--color-secundario)" className=" h-11 w-auto cursor-pointer hover:scale-110 transition-transform"/></a></div>
            <div className=''><a href="https://github.com/vfv9312"><AiFillGithub color="var(--color-secundario)" className="h-11 w-auto cursor-pointer hover:scale-110 transition-transform"/></a></div>
            <div className=""><a href="https://api.whatsapp.com/send?phone=9612363939" target="_blank"><AiOutlineWhatsApp color="var(--color-secundario)" className=" h-11 w-auto cursor-pointer hover:scale-110 transition-transform"/></a></div>
            </div>
        </React.Fragment>
    );
}

export {Contactame};