import { FileSignature, MailPlus } from "lucide-react";

export function Actions() {
    return (
        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center gap-x-6">
                <button
                    title="Editar"
                    className="text-black transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                >
                    <FileSignature
                        className="h-5 w-5"
                    />
                </button>

                <button
                    title="Enviar email"
                    className="text-black transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                >
                    <MailPlus
                        className="h-5 w-5"
                    />
                </button>
            </div>
        </td>
    )
}