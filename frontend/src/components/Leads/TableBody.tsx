import { useCreateLead } from "../../hooks/useCreateLead";
import { Actions } from "./Actions";

export function TableBody() {
    const { leads } = useCreateLead();

    return (
        <>
            {leads.map((lead) => (
                <tbody
                    key={lead.id}
                    className="bg-white divide-y divide-gray-300"
                >
                    <tr>
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

                        <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-700 bg-emerald-200">
                                <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 3L4.5 8.5L2 6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <h2 className="text-sm font-normal">
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
