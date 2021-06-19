import { createContext, useState } from "react";



export const postConstruct = createContext(null)

function Post ({children}){
    const [postView, setPostView] = useState('')
    return(
        <postConstruct.Provider value={{postView, setPostView}}>
            {children}
        </postConstruct.Provider>
    )
}

export default Post