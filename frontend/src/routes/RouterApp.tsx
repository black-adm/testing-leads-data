import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Form } from "../pages/form/Form";
import { Leads } from "../pages/Leads"

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/criar-conta" element={<Register />} />
                <Route path="leads/criar" element={<Form />} />
                <Route path="/leads" element={<Leads />} />
            </Routes>
        </BrowserRouter>
    )
}