import { Loader } from "lucide-react";

export function Button({ loading }: any) {
    return (
        <div>
            <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader
                            className="inline-flex ml-3 animate-spin w-4 h-4 text-white"
                        />
                    </>
                ) : (
                    <span>Entrar</span>
                )}
            </button>
        </div>
    )
}