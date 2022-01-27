import { useContext } from "react"
import { AuthContext } from "../contex/AuthProvider";




const UseAuth = () =>{
    return useContext(AuthContext)



}

export default UseAuth;