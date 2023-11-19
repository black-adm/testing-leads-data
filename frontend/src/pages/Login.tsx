import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { api } from "../api"
import { LoginInputs } from "../components/Login/LoginInputs";
import { LoginButton } from "../components/Login/LoginButton";
import { BadgeInfo } from "lucide-react";

export type ValidateLoginForm = z.infer<typeof validateLoginFormSchema>

const validateLoginFormSchema = z.object({
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
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
    } = useForm<ValidateLoginForm>({
        resolver: zodResolver(validateLoginFormSchema)
    })

    async function loginData() {
        setLoading(true)

        const formData = {
            email: watch('email'),
            password: watch('password'),
        };

        api.post("/user/login", formData)
            .then((response) => {
                console.log(response.data)
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
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center mt-6 px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Para continuar, <br />
                        acesse a sua conta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        onSubmit={handleSubmit(loginData)}
                        className="space-y-6"
                    >
                        <LoginInputs
                            register={register}
                            errors={errors}
                        />
                        <LoginButton
                            loadig={loading}
                        />
                    </form>

                    {error && (
                        <div className="flex flex-col pt-2 pl-3">
                            <p className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                                <BadgeInfo className='h-4 w-4' />
                                {error.message}
                            </p>
                        </div>
                    )}

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não possui uma conta?{' '}
                        <Link
                            to="/criar-conta"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}