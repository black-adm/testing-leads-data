import { Loader } from "lucide-react";

type LoadingButton = {
    loading?: boolean
    loadingTitle?: string
    title: string
    className: string
}

export function Button({ loading, loadingTitle, title, className }: LoadingButton) {
    return (
        <>
            <button
                type="submit"
                className={`${loading} ? "opacity-50 cursor-not-allowed" : "" ${className}`}
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