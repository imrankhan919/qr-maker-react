import {createContext, useReducer} from "react"
import { useState } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()


export const GlobalProvider = ({children}) => {


      const initialState = {
        qr : "https://ph-files.imgix.net/29355f27-3451-4f21-b1ab-19808e77388e.gif?auto=format&fit=crop"
      }

      const [state , dispatch] = useReducer(GlobalReducer , initialState)


    
   
    
    
    
    return(
        <GlobalContext.Provider value={{
            qr : state.qr,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext