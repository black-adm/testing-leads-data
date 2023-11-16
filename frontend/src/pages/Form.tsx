import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { api } from "../api"
import { Button } from "../components/Button"
import { Inputs } from "../components/Inputs"

export type ValidateInputForm = z.infer<typeof validateInputFormSchema>

const validateInputFormSchema = z.object({
    companyName: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    cep: z.string()
        .nonempty('O campo de cep é obrigatório!'),
    address: z.string()
        .nonempty('O campo de endereço é obrigatório!'),
    email: z.string()
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

        api.post("api/leads", formData)
            .then((response) => {
                console.log(response.data);
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
                    <Inputs
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
                        <Button
                            loading={loading}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
