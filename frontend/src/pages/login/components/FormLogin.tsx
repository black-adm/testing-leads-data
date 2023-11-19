import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "../../../api"
import { ValidateLoginForm, validateLoginFormSchema } from "../validations/ValidateLoginForm"

import { LoginInputs } from "./LoginInputs"
import { Button } from "./Button"
import { BadgeInfo } from "lucide-react"

export function FormLogin() {
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
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
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
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                onSubmit={handleSubmit(loginData)}
                className="space-y-6"
            >
                <LoginInputs
                    register={register}
                    errors={errors}
                />
                <Button
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
    )
}