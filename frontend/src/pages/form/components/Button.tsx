import { CheckCheck, Loader } from "lucide-react";

export function Button({ loading }: any) {
    return (
        <button
            type="submit"
            className={`hover:shadow-form rounded-md bg-[#6A64F1] w-full flex items-center justify-center py-3 px-8 text-base font-semibold text-white outline-none
            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
        >
            {loading ? (
                <>
                <span>Salvando lead</span>
                <Loader
                    className="inline-flex ml-3 animate-spin w-4 h-4 text-white"
                />
            </>
            ) : (
                <span className="flex items-center justify-center gap-x-2">
                    cadastrar
                    <CheckCheck className="h-4 w-4" />
                </span>
            )}
        </button>
    )
}