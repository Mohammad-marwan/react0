import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children})=>{
    const [isLogin , setIsLogin] = useState(localStorage.getItem("userData")?true:false);
    const [userData , setUserData] = useState([])
  return <UserContext.Provider value={{isLogin , setIsLogin ,userData , setUserData}}>{children}</UserContext.Provider>
}

export default UserContextProvider;