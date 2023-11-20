import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../../../api';
import { ValidateLeadForm, validateLeadForm } from '../validations/ValidateLeadForm';
import { useCustomForm } from '../../../hooks/useCustomForm';

import { PersonalInput } from './PersonalInput';
import { AddressInput } from './AddressInput';
import { DetailsInput } from './DetailsInput';
import { Button } from '../../../components/Button';
import { ErrorMessage } from '../../../components/ErrorMessage';

export function MultiStep() {
    const {
        step,
        loading,
        error,
        navigate,
        nextStep,
        previewStep,
        setLoading,
        setError
    } = useCustomForm();

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateLeadForm>({
        resolver: zodResolver(validateLeadForm)
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
                setError({ message: error.message });
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
                        « voltar
                    </button>
                }
                {step < 3 &&
                    <button
                        type='button'
                        className='hover:shadow-form rounded-md bg-[#6A64F1] w-full flex items-center justify-center py-3 px-8 text-base font-semibold text-white outline-none'
                        onClick={nextStep}
                    >
                        próximo »
                    </button>
                }
                {step === 3 && <Button loading={loading} loadingTitle='salvando lead' title='cadastrar' />}
            </div>
            <ErrorMessage error={error || undefined} />
        </form>

    )
}