import { createContext, useState } from "react"
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext } from "react"


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    //Login
    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
    //Register

    //Logout

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)
export { AuthContext, AuthProvider, useAuth }