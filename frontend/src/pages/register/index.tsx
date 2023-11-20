import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "../../api"
import { useCustomForm } from "../../hooks/useCustomForm";
import { ValidateRegisterForm, validateRegisterFormSchema } from "../../types/schemas/inputs-forms-schema";
import { PersonInputs } from "./components/PersonInputs";
import { RegisterInputs } from "./components/RegisterInputs";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Lock } from "lucide-react";

export default function Register() {
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
    } = useForm<ValidateRegisterForm>({
        resolver: zodResolver(validateRegisterFormSchema)
    })

    async function registerData() {
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
                navigate("/inicio")
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
        <div className="flex min-h-full flex-1 flex-col justify-center mt-6 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <span className="flex justify-center">
                    <Lock className="h-6 w-6" />
                </span>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Olá, vamos criar sua conta?
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(registerData)}
                >
                    {step === 1 && <PersonInputs register={register} errors={errors} />}
                    {step === 2 && <RegisterInputs register={register} errors={errors} />}

                    <div className='w-full flex items-center justify-center gap-x-3'>
                        {step > 1 &&
                            <button
                                type='button'
                                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                onClick={previewStep}
                            >
                                « voltar
                            </button>
                        }
                        {step < 2 &&
                            <button
                                type='button'
                                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                onClick={nextStep}
                            >
                                próximo »
                            </button>
                        }
                        {step === 2 &&
                            <Button
                                loading={loading}
                                loadingTitle='salvando lead' title='criar conta'
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            />}
                    </div>
                    <ErrorMessage error={error || undefined} />
                </form>
            </div>
        </div>
    )
}


