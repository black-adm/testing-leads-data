import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Register } from "../pages/register/Register";
import { Leads } from "../pages/leads/Leads"
import Login from "../pages/login";
import Form from "../pages/form-leads";

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