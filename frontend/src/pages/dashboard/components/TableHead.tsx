export function TableHead() {
    return (
        <thead className="bg-gray-50 text-indigo-400 font-medium">
            <tr>
                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Nome da empresa
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Email
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Telefone
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Endereço
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Cep
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Outros contatos
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Reunião
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm text-left rtl:text-right"
                >
                    Ações
                </th>
            </tr>
        </thead>
    )
}