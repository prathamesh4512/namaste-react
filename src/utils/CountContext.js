
import { createContext, useState } from "react"

export const CountContext = createContext(null);

export const CountProvider = ({children}) => {

    const [count,setCount] = useState(0)

    return<CountContext.Provider value={{count,setCount}} >
        {children}
    </CountContext.Provider>
}

