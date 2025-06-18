import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Dashboard from "./views/Dashboard"

/*Crear un componente que valide que vista quiere ver el usuario */
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}


export { Router } /* Lo exporto así, para que pueda usarlo fuera de este archivo*/