import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { api } from "../api"
import { FormInputs } from "../components/Form/FormInputs"
import { FormButton } from "../components/Form/FormButton"
import { BadgeInfo } from "lucide-react"

export type ValidateInputForm = z.infer<typeof validateInputFormSchema>

const validateInputFormSchema = z.object({
    companyName: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    cep: z.string()
        .nonempty('O campo de cep é obrigatório!'),
    address: z.string()
        .nonempty('O campo de endereço é obrigatório!'),
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    phone: z.string()
        .nonempty('O campo de telefone é obrigatório!'),
    contact: z.string()
        .nonempty('O campo de contato é obrigatório!'),
    message: z.string()
})

export function Form() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateInputForm>({
        resolver: zodResolver(validateInputFormSchema)
    })

    async function sendData() {
        setLoading(true)

        const formData = {
            companyName: watch('companyName'),
            cep: watch('cep'),
            address: watch('address'),
            email: watch('email'),
            phone: watch('phone'),
            contact: watch('contact'),
            message: watch('message')
        };

        api.post("/leads/create", formData)
            .then((response) => {
                console.log(response.data);
                navigate("/admin")
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
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleSubmit(sendData)}>
                    <FormInputs
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

                    <div>
                        <FormButton
                            loading={loading}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
