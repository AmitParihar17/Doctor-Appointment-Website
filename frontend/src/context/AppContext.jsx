import { createContext, useContext } from "react";
import { doctors } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const navigate = useNavigate()
    const currencySymbol = "$"

    const value = {
        doctors,navigate,currencySymbol
    }

    return <AppContext.Provider value={value}>
                {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}


