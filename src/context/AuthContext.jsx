import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useContext } from "react"
import { signOut } from "firebase/auth"


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => unsubscribe()
    }, [])

    //Login
    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
    //Register

    const register = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    //Logout

    const logout = () => signOut(auth)

    return (
        <AuthContext.Provider value={{ login, register, user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)
export { AuthContext, AuthProvider, useAuth }