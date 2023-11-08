import React, { useState } from 'react'
import { createContext } from "react";
import 'animate.css';




interface VariableGlobal {
  openModal: boolean;
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>;
  cambiarVariable:boolean;
  setCambiarVariable:React.Dispatch<React.SetStateAction<boolean>>;
  Temaoscuro:string;
  TemaClaro:string;
  titulo: Array<Titulos>;
  setTitulo: React.Dispatch<React.SetStateAction<Array<Titulos>>>;
}

type Titulos = {id:string, tituloText:string, imagen:string, experiencia : string, conocimiento:string};


 const GlobalContext= createContext<VariableGlobal>({} as VariableGlobal)

function GlobalProvider({children}:{children:React.ReactNode}):JSX.Element {
  //para cambiar el tema del fondo true claro o false oscuro
  const [cambiarVariable, setCambiarVariable] = useState<boolean>(false);
  const Temaoscuro:string = 'bg-gradient-to-r from-[var(--color-primario)] to-[var(--color-tercero)]';
  const TemaClaro:string = 'bg-gradient-to-r from-[var(--color-tema-claro-primario)] to-[var(--color-tema-claro-tercero)]';

  //para saber si se abre o cierra un portal
  const [openModal, setOpenModal] = useState<boolean>(false)

  //valores del modal
  let [titulo, setTitulo] = useState<Array<Titulos>>([])
 
    return(
      <GlobalContext.Provider value={{openModal, setOpenModal, cambiarVariable, setCambiarVariable, Temaoscuro,TemaClaro, titulo, setTitulo,
      }}>
          {children}
      </GlobalContext.Provider>
       
    );
    
}
export {GlobalContext, GlobalProvider};