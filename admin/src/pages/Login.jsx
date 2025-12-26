import React, { useState } from "react";
import { useAdminContext } from "../context/AdminContext";
import axios from "axios"
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Doctor");
  const { setAToken, backendUrl } = useAdminContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
            e.preventDefault()
            try {
                if (state === "Admin") {
                    const {data} = await axios.post(backendUrl + "/api/admin/login", {email,password})
                    if (data.success) {
                        localStorage.setItem('aToken',data.token)
                        setAToken(data.token);
                    } else {
                        toast.error(data.message)
                    }
                } else {

                }
            } catch (error) {
                
            }
  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto  min-w-[340px] items-start shadow-lg rounded-xl p-8 sm:min-w-96 border text-sm text-[#5E5E5E] ">
        <p className="text-2xl font-semi-bold m-auto">
          {" "}
          <span className="text-primary">{state}</span> Login
        </p>
        <div className=" w-full">
          <p className="text-base font-medium p-2">Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-2 border-[#655252] rounded w-full py-2  "
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p className="text-base  font-medium p-2 mt-1">Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" px-2 border border-[# 655252] rounded w-full  py-2"
            type="password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-primary cursor-pointer rounded py-2 text-white font-medium text-base ">
          Login
        </button>
        {state === "Admin" ? (
          <p className="text-gray-600 font-medium ">
            Doctor Login?{" "}
            <span
              className="cursor-pointer text-primary underline font-medium"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-gray-600 font-medium ">
            Admin Login{" "}
            <span
              className="cursor-pointer text-primary underline font-medium"
              onClick={() => setState("Admin")}
            >
              Click here?
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
