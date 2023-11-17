import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "../pages/Login";
import { Form } from "../pages/Form";
import { Admin } from "../pages/Admin"

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/leads" element={<Form />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}