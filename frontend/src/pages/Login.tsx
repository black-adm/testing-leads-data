import { z } from "zod";
import { api } from "../api"
import { LoginInputs } from "../components/LoginInputs";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type ValidateHomeForm = z.infer<typeof validateHomeFormSchema>

const validateHomeFormSchema = z.object({
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    role: z.enum(['comercial', 'prospect'])
})

export function Login() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateHomeForm>({
        resolver: zodResolver(validateHomeFormSchema)
    })

    async function loginData() {
        setLoading(true)

        const formData = {
            email: watch('email'),
            role: watch('role')
        };

        try {
            const response = await api.post('leads/user', formData);

            if (response.data.success) {
                navigate('/leads');
            }
            setError(response.data.message);
        }
        catch {
            setError(error);
            console.error(error);
        }
        finally {
            setLoading(false)
        };
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center mt-24 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock-keyhole w-auto mx-auto"
                >
                    <circle cx={12} cy={16} r={1} />
                    <rect x={3} y={10} width={18} height={12} rx={2} />
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Entre para visualizar os Leads
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(loginData)}
                >
                    <LoginInputs
                        register={register}
                        errors={errors}
                    />
                    {error && (
                        <div className="flex flex-col pt-2 pl-3">
                            <p className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                {error.message}
                            </p>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline-flex animate-spin w-4 h-4 text-white"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ) : (
                                <span>Criar conta e acessar</span>
                            )}

                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


