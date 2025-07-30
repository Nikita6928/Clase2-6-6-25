import { createContext } from "react";
import { useState } from "react";
import { auth } from "../config/firebase";


const AuthContext = createContext()

const AuthProvider = () => {
    const [user, setUser] = useState()

    //Login
    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
    //Register

    //Logout

    return (
        <AuthContext.Provider value={login}>

        </AuthContext.Provider>
    )
}

export { AuthContext }