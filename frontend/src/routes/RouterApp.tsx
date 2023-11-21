import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Form from "../pages/leads";
import Dashboard from "../pages/dashboard";

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/criar-conta" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="leads/criar" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}