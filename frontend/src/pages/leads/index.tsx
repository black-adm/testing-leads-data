import { MultiStep } from "./components/MultiStep"

export default function Form() {
    return (
        <div className="flex items-center justify-center mt-8 p-4 lg:p-12">
            <div className="mx-auto w-full max-w-screen md:max-w-[550px] border-2 border-gray-200 p-12 rounded-md">
                <MultiStep />
            </div>
        </div >
    )
}
