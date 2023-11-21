import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Cards } from "./components/Cards";
import { TableHead } from "./components/TableHead";
import { TableBody } from "./components/TableBody";

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="w-16">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
                <main className="row-span-2 w-full">
                    <Header />
                    <Cards />
                    <div className="mt-10 px-6">
                        <div className="overflow-x-auto lg:overflow-hidden sm:rounded-md">
                            <table className="min-w-full border border-gray-200 divide-indigo-300">
                                <TableHead />
                                <TableBody />
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}