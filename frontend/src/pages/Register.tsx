import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import { api } from "../api"
import { RegisterInputs } from "../components/Register/RegisterInputs";
import { RegisterButton } from "../components/Register/RegisterButton";
import { BadgeInfo } from "lucide-react";

export type ValidateHomeForm = z.infer<typeof validateHomeFormSchema>

const validateHomeFormSchema = z.object({
    firstName: z.string().nonempty('O campo nome é obrigatório!'),
    lastName: z.string().nonempty('O campo sobrenome é obrigatório!'),
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    role: z.enum(['comercial', 'prospect'])
})

export function Register() {
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
            firstName: watch('firstName'),
            lastName: watch('lastName'),
            email: watch('email'),
            password: watch('password'),
            role: watch('role')
        };

        api.post("/user/register", formData)
            .then((response) => {
                console.log(response.data);
                navigate("/leads")
            })
            .catch((error) => {
                setError(error);
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            });
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center mt-6 px-6 py-12 lg:px-8">
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
                    Olá, vamos criar sua conta?
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(loginData)}
                >
                    <RegisterInputs
                        register={register}
                        errors={errors}
                    />
                    
                    {error && (
                        <div className="flex flex-col pt-2 pl-3">
                            <p className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                                <BadgeInfo className='h-4 w-4' />
                                {error.message}
                            </p>
                        </div>
                    )}

                    <RegisterButton
                        loading={loading}
                    />
                </form>
            </div>
        </div>
    )
}


