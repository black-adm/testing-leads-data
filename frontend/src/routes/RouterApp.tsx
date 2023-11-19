import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Register } from "../pages/Register";
import { Form } from "../pages/Form";
import { Leads } from "../pages/Leads"

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/cadastrar" element={<Form />} />
                <Route path="/leads" element={<Leads />} />
            </Routes>
        </BrowserRouter>
    )
}