import {
    Home,
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
            <aside className="flex border-r">
                <div className="flex flex-col items-center w-full h-screen py-8 space-y-8 bg-gray-50">
                    <a href="#">
                        <img
                            className="w-auto h-6"
                            src="https://merakiui.com/images/logo.svg"
                            alt=""
                        />
                    </a>

                    <span className="pt-4">
                        <img
                            className="rounded-full w-8 h-8"
                            src="https://avatars.githubusercontent.com/u/68331373?v=4"
                            alt=""
                        />
                    </span>


                    <div className="flex flex-col pt-6 space-y-6 justify-start h-full">
                        <Link
                            to="/inicio"
                            title="inicio"
                            className="p-1.5 text-indigo-500 transition-colors duration-200 hover:bg-indigo-200 rounded-lg"
                        >
                            <Home
                                className="h-6 w-6"
                            />
                        </Link>

                        <Link
                            to="/leads"
                            title="leads"
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