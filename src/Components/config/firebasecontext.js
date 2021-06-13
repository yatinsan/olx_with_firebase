import { createContext, useState } from "react";

export const firebaseconext = createContext(null)

export const authcontext = createContext(null)

export default function Context({children}){
    const [user, setuser] = useState(null)
    return(
        <authcontext.Provider value={{user,setuser}}>
            {children}
        </authcontext.Provider>
    )
} 