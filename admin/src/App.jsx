 import React from 'react'
import Login from './pages/Login'
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 
 const App = () => {
   return (
     <div>
       <Login />
       <ToastContainer position="top-right" autoClose={3000} />
     </div>
   );
 }
 
 export default App
 