import { ChevronsLeft, ChevronsRight } from "lucide-react";

export function Pagination() {
    return (
        <div className="px-6 flex items-center justify-between mt-6 pb-12 md:pb-0">
            <a
                href="#"
                className="flex items-center px-5 py-2 text-sm font-medium text-indigo-600 capitalize transition-colors duration-200 bg-white border-2 border-indigo-600 rounded-md gap-x-2 hover:bg-indigo-500 hover:text-white hover:border-none"
            >
                <ChevronsLeft
                    className="w-5 h-5 rtl:-scale-x-100"
                />
                <span>Anterior</span>
            </a>

            <a
                href="#"
                className="flex items-center px-5 py-2 text-sm font-medium text-indigo-600 capitalize transition-colors duration-200 bg-white border-2 border-indigo-600 rounded-md gap-x-2 hover:bg-indigo-500 hover:text-white hover:border-none"
            >
                <span>Próximo</span>
                <ChevronsRight
                    className="w-5 h-5 rtl:-scale-x-100"
                />
            </a>
        </div>
    )
}