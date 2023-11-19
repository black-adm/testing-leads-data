import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { api } from '../../api';
import { PersonalInput } from './PersonalInput';
import { AddressInput } from './AddressInput';
import { DetailsInput } from './DetailsInput';
import { FormButton } from './FormButton';
import { BadgeInfo } from 'lucide-react';

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

export function MultiStep() {
    const [step, setStep] = useState<number>(1);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function nextStep() {
        setStep((prevStep) => prevStep + 1);
    };

    function previewStep() {
        setStep((prevStep) => prevStep - 1);
    };

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
            })
    };

    return (
        <form onSubmit={handleSubmit(sendData)}>
            {step === 1 && <PersonalInput register={register} errors={errors} />}
            {step === 2 && <AddressInput register={register} errors={errors} />}
            {step === 3 && <DetailsInput register={register} errors={errors} />}

            <div className='w-full flex items-center justify-center gap-x-3'>
                {step > 1 &&
                    <button
                        type='button'
                        className='hover:shadow-form rounded-md bg-[#6A64F1] w-full flex items-center justify-center py-3 px-8 text-base font-semibold text-white outline-none'
                        onClick={previewStep}
                    >
                        Voltar
                    </button>
                }
                {step < 3 &&
                    <button
                        type='button'
                        className='hover:shadow-form rounded-md bg-[#6A64F1] w-full flex items-center justify-center py-3 px-8 text-base font-semibold text-white outline-none'
                        onClick={nextStep}
                    >
                        Próximo
                    </button>}
                {step === 3 && <FormButton loading={loading} />}
            </div>

            {error && (
                <div className="flex flex-col pt-2 pl-3">
                    <p className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {error.message}
                    </p>
                </div>
            )}
        </form>

    )
}