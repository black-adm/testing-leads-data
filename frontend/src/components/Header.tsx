import { Crown } from "lucide-react";

export function Header() {
    return (
        <div className="bg-gray-50 flex items-center justify-between px-4 py-4 border-b lg:py-6">
            <h1 className="text-lg sm:text-2xl font-semibold text-black">
                Workspace
            </h1>

            <a
                href="https://github.com/Kamona-WD/kwd-dashboard"
                target="_blank"
                className="flex items-center justify-center gap-x-2 px-4 py-2 text-xs sm:text-sm text-white bg-violet-500 font-medium rounded-md bg-primary hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white"
            >
                Se tornar premium
                <Crown className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
        </div>
    )
}