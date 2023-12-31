import { FormLogin } from "./components/FormLogin";

export default function Login() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center mt-6 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Para continuar, <br />
                    acesse a sua conta
                </h2>
            </div>

            <FormLogin />
        </div>
    )
}