import React, { useState } from 'react'
import { createContext } from "react";
import 'animate.css';

 const GlobalContext = createContext({})

function GlobalProvider({children}:{children:React.ReactNode}):JSX.Element {
  //para cambiar el tema del fondo true claro o false oscuro
  const [cambiarVariable, setCambiarVariable] = useState(false);
  const Temaoscuro:string = 'bg-gradient-to-r from-[var(--color-primario)] to-[var(--color-tercero)]';
  const TemaClaro:string = 'bg-gradient-to-r from-[var(--color-tema-claro-primario)] to-[var(--color-tema-claro-tercero)]';

  //para saber si se abre o cierra un portal
  const [openModal, setOpenModal] = useState(false)

  //valores del modal
  let [titulo, setTitulo] = useState('')
 
    return(
      <GlobalContext.Provider value={{openModal, setOpenModal, cambiarVariable, setCambiarVariable, Temaoscuro,TemaClaro, titulo, setTitulo,
      }}>
          {children}
      </GlobalContext.Provider>
       
    );
    
}
export {GlobalContext, GlobalProvider};