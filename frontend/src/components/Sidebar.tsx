import {
    LayoutDashboard,
    UserPlus2,
    Power,
    SendHorizonal,
    CalendarCheck,
    Settings
} from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <>
            <aside className="flex border-r-[2.5px]">
                <div className="flex flex-col items-center w-full h-screen py-8 space-y-8 bg-gray-50">
                    <a href="#">
                        <img
                            className="w-auto h-6"
                            src="https://merakiui.com/images/logo.svg"
                            alt=""
                        />
                    </a>

                    <div className="flex flex-col pt-6 space-y-6 justify-start h-full">
                        <Link
                            to="/dashboard"
                            title="dashboard"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <LayoutDashboard
                                className="h-6 w-6"
                            />
                        </Link>

                        <Link
                            to="/leads/criar"
                            title="criar lead"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <UserPlus2
                                className="h-6 w-6"
                            />
                        </Link>

                        <Link
                            to="#"
                            title="envios"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <SendHorizonal
                                className="h-6 w-6"
                            />
                        </Link>

                        <Link
                            to="#"
                            title="reuniões"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <CalendarCheck
                                className="h-6 w-6"
                            />
                        </Link>

                        <Link
                            to="#"
                            title="configurações"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <Settings
                                className="h-6 w-6"
                            />
                        </Link>
                    </div>

                    <div className="flex flex-col justify-end">
                        <hr className="border-2 border-gray-200 mb-6" />

                        <Link
                            to="#"
                            title="sair"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <Power
                                className="h-6 w-6"
                            />
                        </Link>
                    </div>
                </div>
            </aside >
        </>

    )
}