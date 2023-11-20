import { Loader } from "lucide-react";

type LoadingButton = {
    loading?: boolean
    loadingTitle?: string
    title: string
}

export function Button({ loading, loadingTitle, title }: LoadingButton) {
    return (
        <>
            <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
            >
                {loading ? (
                    <div className="flex items-center justify-center gap-x-3">
                        <span>{loadingTitle}</span>
                        <Loader
                            className="animate-spin w-4 h-4 text-white"
                        />
                    </div>
                ) : (
                    <span>{title}</span>
                )}
            </button>
        </>
    )
}