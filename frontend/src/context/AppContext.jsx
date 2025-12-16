import { createContext, useContext } from "react";
import { doctors } from "../assets/assets.js";
export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const value = {
        doctors
    }

    return <AppContext.Provider value={value}>
                {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}


