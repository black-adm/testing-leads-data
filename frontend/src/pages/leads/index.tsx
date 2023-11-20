import { UserSection } from "./components/UserSection";
import { Pagination } from "./components/Pagination";
import { TableBody } from "./components/TableBody";
import { Link } from "react-router-dom";

export default function Leads() {
    return (
        <div>
            <div className="mx-auto pt-12">
                <div className="text-center">
                    <UserSection />

                    <div className="mt-10 flex flex-col space-y-2 md:flex-row md:space-y-0 items-center justify-center gap-x-6">
                        <h4 className="text-xl font-semibold leading-8 text-black">
                            Tabela de leads cadastrados
                        </h4>

                        <Link
                            to="/leads/criar"
                            className="text-sm font-semibold leading-6 text-sky-500 hover:underline hover:text-sky-400"
                        >
                            criar novo <span aria-hidden="true">+</span>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="max-w-screen-2xl px-4 mt-8 md:mt-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex justify-center w-full">
                        <div className="inline-block w-screen md:min-w-full py-2 align-middle md:px-4 lg:px-6">

                            <div className="overflow-x-auto lg:overflow-hidden sm:rounded-md">
                                <table className="min-w-full border-2 border-indigo-300 divide-indigo-300">
                                    <thead className="bg-indigo-500">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Nome da empresa
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Email
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Telefone
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Endereço
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Cep
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Outros contatos
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Reunião
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                                            >
                                                Ações
                                            </th>
                                        </tr>
                                    </thead>
                                    <TableBody />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
            </section>
        </div>
    )
}