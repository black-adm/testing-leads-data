import { useGetLeads } from "../hooks/useGetLeads";

export function Status() {
    const { leads } = useGetLeads();

    return (
        <>
            {leads.map((lead) => (
                <h2 className="font-medium text-xs">
                    {lead.status !== null ? lead.status : "Sem retorno"}
                </h2>
            ))}
        </>
    );
}
