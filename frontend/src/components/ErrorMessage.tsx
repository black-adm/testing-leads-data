import { BadgeInfo } from "lucide-react";

type ErrorProps = {
    error?: {
        message: string;
    };
}

export function ErrorMessage({ error }: ErrorProps) {
    return (
        <div className="flex flex-col pt-2 pl-3">
            {error && (
                <p className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {error?.message}
                </p>
            )}
        </div>
    )
}