import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "../../../api"
import { ValidateLoginForm, validateLoginFormSchema } from "../../../types/schemas/inputs-forms-schema"

import { LoginInputs } from "./LoginInputs"
import { Button } from "../../../components/Button"
import { ErrorMessage } from "../../../components/ErrorMessage"

export function FormLogin() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<{ message: string } | null>(null);
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
                setError({ message: error.message });
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
                    loading={loading}
                    title="entrar"
                />
            </form>
            <ErrorMessage error={error || undefined} />

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