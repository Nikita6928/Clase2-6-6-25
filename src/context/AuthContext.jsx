import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase"
import { useContext } from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"


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