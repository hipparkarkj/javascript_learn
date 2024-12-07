import React from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className=" flex   bg-orange-600 text-center mx-3 my-10  px-10 py-1" >
            <h2>Login</h2>
            <div className="border-solid mx-1 my-0.2 ">
                <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username" />
                {"     "}
            </div>
            <div className=" border-solid mx-1 my-0.2">
                <input type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password" />
            </div>
            <div className="">
                <button onClick={handleSubmit} >Submit</button>
            </div>


        </div>
    )

}
export default Login;