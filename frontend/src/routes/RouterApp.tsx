import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "../pages/Login";
import { Form } from "../pages/Form";
import { Leads } from "../pages/Leads"

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Form />} />
                <Route path="/leads" element={<Leads />} />
            </Routes>
        </BrowserRouter>
    )
}