
import { createPortal } from "react-dom";
import 'animate.css';



function Modal({children}:{children:React.ReactNode}) {
    return createPortal (
<div className="Modal bg-[rgba(32,35,41,.9)] flex justify-center items-start text-white fixed top-0 bottom-0 left-0 right-0 animate__animated animate__backInLeft">
    {children}
</div>,
document.getElementById('modal')
    );
}

export {Modal};