import { MultiStep } from "../components/Form/MultiStep"

export function Form() {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] border-2 border-gray-200 p-12 rounded-sm">
                <MultiStep />
            </div>
        </div >
    )
}
