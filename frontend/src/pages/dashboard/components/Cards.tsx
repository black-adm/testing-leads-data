import { useGetLeads } from "../../../hooks/useGetLeads";

export function Cards() {
    const { leads } = useGetLeads();

    const totalLeads = leads.length

    return (
        <div className="mt-6 px-4 scroll scroll-smooth">
            <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">

                <div className="bg-gray-50 border-[2.5px] border-indigo-400 flex items-center justify-between p-4 rounded-md">
                    <div>
                        <h6 className="pb-2 text-xs font-semibold leading-none tracking-wider text-indigo-400 uppercase">
                            novos leads
                        </h6>
                        <span className="inline-block px-2 py-px mr-6 font-semibold text-xs text-emerald-600 bg-green-100 rounded-xl">
                            + 1.3%
                        </span>
                        <span className="text-xl font-semibold">{totalLeads}</span>
                    </div>
                    <div>
                        <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="bg-gray-50 border-[2.5px] border-indigo-400 flex items-center justify-between p-4 rounded-md">
                    <div>
                        <h6 className="pb-2 text-xs font-semibold leading-none tracking-wider text-indigo-400 uppercase">
                            emails enviados
                        </h6>
                        <span className="inline-block px-2 py-px mr-6 font-semibold text-xs text-emerald-600 bg-green-100 rounded-xl">
                            +4.6%
                        </span>
                        <span className="text-xl font-semibold">12</span>
                    </div>
                    <div>
                        <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="bg-gray-50 border-[2.5px] border-indigo-400 flex items-center justify-between p-4 rounded-md">
                    <div>
                        <h6 className="pb-2 text-xs font-semibold leading-none tracking-wider text-indigo-400 uppercase">
                            reuniões aceitas
                        </h6>
                        <span className="inline-block px-2 py-px mr-6 font-semibold text-xs text-red-600 bg-red-100 rounded-xl">
                            -2.1%
                        </span>
                        <span className="text-xl font-semibold">3</span>
                    </div>
                    <div>
                        <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="bg-gray-50 border-[2.5px] border-indigo-400 flex items-center justify-between p-4 rounded-md">
                    <div>
                        <h6 className="pb-2 text-xs font-semibold leading-none tracking-wider text-indigo-400 uppercase">
                            reuniões rejeitadas
                        </h6>
                        <span className="inline-block px-2 py-px mr-6 font-semibold text-xs text-emerald-600 bg-green-100 rounded-xl">
                            0.1%
                        </span>
                        <span className="text-xl font-semibold">1</span>
                    </div>
                    <div>
                        <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}