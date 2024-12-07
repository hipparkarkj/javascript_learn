import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext)

    if (!user) return <div className=" flex justify-center bg-orange-600 text-center mx-10 my-10  px-10 py-1" >please login</div>
    return <div className=" flex justify-center bg-orange-600 text-center mx-10 my-10  px-10 py-1" >welcome {user.username} </div>

   
}

export default Profile;