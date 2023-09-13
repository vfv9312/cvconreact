import React, { Children } from "react";
import { createPortal } from "react-dom";




function Modal({children}:{children:React.ReactNode}) {
    return createPortal (
<div className="Modal">
    {children}
</div>,
document.getElementById('modal')
    );
}

export {Modal};