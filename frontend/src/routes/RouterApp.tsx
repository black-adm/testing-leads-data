import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Form from "../pages/form-leads";
import Leads from "../pages/leads";

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