import { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext()

export const AdminContextProvider = ({children}) => {
    const [aToken,setAToken] = useState(localStorage.getItem("aToken") ? localStorage.getItem("aToken") : "" )
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate()

    const value = {
            aToken,setAToken,backendUrl,navigate
    }

    return <AdminContext.Provider value={value}>
        {children}
    </AdminContext.Provider>
}

export const useAdminContext = () => {
    return useContext(AdminContext)
}