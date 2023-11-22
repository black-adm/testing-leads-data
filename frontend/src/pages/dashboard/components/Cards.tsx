import { useGetLeads } from "../../../hooks/useGetLeads";

export function Cards() {
    const { leads } = useGetLeads();

    const totalLeads = leads.length
    const statusAccepted = leads.filter((lead) => lead.status === 'accepted')
    const statusReject = leads.filter((lead) => lead.status === 'reject')

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
                            <img
                                src="/leads.png"
                                alt="leads icon"
                            />
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
                            <img
                                src="/email.png"
                                alt="send email icon"
                            />
                        </span>
                    </div>
                </div>

                <div className="bg-gray-50 border-[2.5px] border-indigo-400 flex items-center justify-between p-4 rounded-md">
                    <div>
                        <h6 className="pb-2 text-xs font-semibold leading-none tracking-wider text-indigo-400 uppercase">
                            reuniões aceitas
                        </h6>
                        <span className="inline-block px-2 py-px mr-6 font-semibold text-xs text-emerald-600 bg-green-100 rounded-xl">
                            0.2%
                        </span>
                        <span className="text-xl font-semibold">{statusAccepted.length}</span>
                    </div>
                    <div>
                        <span>
                            <img
                                src="/accepted.png"
                                alt="accepted icon"
                            />
                        </span>
                    </div>
                </div>

                <div className="bg-gray-50 border-[2.5px] border-indigo-400 flex items-center justify-between p-4 rounded-md">
                    <div>
                        <h6 className="pb-2 text-xs font-semibold leading-none tracking-wider text-indigo-400 uppercase">
                            reuniões rejeitadas
                        </h6>
                        <span className="inline-block px-2 py-px mr-6 font-semibold text-xs text-red-600 bg-red-100 rounded-xl">
                            0.1%
                        </span>
                        <span className="text-xl font-semibold">{statusReject.length}</span>
                    </div>
                    <div>
                        <span>
                            <img
                                src="/reject.png"
                                alt="rejected icon"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}