import React from 'react'
import {assets} from "../assets/assets"
import { useAdminContext } from '../context/AdminContext'

const Navbar = () => {
    const {aToken,setAToken,navigate} = useAdminContext()
    const logout  = () =>  {
        navigate("/")
        aToken && setAToken("")
        aToken && localStorage.removeItem("aToken")
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 bg-white '>
        <div className='flex items-center gap-2 text-xs'>
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border border-gray-500 text-gray-600 rounded-full py-0.5 px-2.5'>{aToken ? "Admin" : "Doctor"}</p>
        </div>
        <button onClick={logout} className='border rounded-full bg-primary text-white text-sm  py-2 px-10 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar
