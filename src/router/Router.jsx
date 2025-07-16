import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Dashboard from "../views/Dashboard"
import Register from "../views/Register"
import Login from "../views/Login"
import NotFound from "../views/notFound"

/*Crear un componente que valide que vista quiere ver el usuario */
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />


            </Routes>
        </BrowserRouter>
    )
}


export { Router } /* Lo exporto así, para que pueda usarlo fuera de este archivo*/