import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Form } from "../pages/Form";
import { Admin } from "../pages/Admin"

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leads" element={<Form />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}