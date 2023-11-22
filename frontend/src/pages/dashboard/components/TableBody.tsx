import { useGetLeads } from "../../../hooks/useGetLeads";
import { Actions } from "./Actions";

export function TableBody() {
    const { leads } = useGetLeads();

    return (
        <>
            {leads.map((lead) => (
                <tbody
                    key={lead.id}
                    className="bg-white divide-y divide-gray-300"
                >
                    <tr className="border-b border-gray-100">
                        <td className="px-4 py-4 text-sm sm:font-medium text-black whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                                <input
                                    type="checkbox"
                                    className="text-blue-500 border-indigo-300 rounded"
                                />
                                <span>
                                    {lead.companyName}
                                </span>
                            </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                            {lead.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                            {lead.phone}
                        </td>

                        <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                            {lead.address}
                        </td>

                        <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                            {lead.cep}
                        </td>

                        <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                            {lead.contact}
                        </td>

                        <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-700 bg-emerald-200">
                                <h2 className="font-medium text-xs">
                                    {lead.status !== null ? lead.status : "Sem retorno"}
                                </h2>
                            </div>
                        </td>

                        <Actions />
                    </tr>
                </tbody >
            ))}
        </>
    );
}
