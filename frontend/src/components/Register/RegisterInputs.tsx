import { UseFormRegister } from 'react-hook-form';
import { ValidateHomeForm } from '../../pages/Register';
import { BadgeInfo } from 'lucide-react';

interface RegisterProps {
    register: UseFormRegister<ValidateHomeForm>;
    errors: any;
}

export function RegisterInputs({ register, errors }: RegisterProps) {
    return (
        <>
            <div className='flex justify-center items-center gap-x-2'>
                <div>
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Nome
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="nome"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            maxLength={30}
                            {...register('firstName')}
                        />
                    </div>

                    {errors.firstName &&
                        <span className="pt-2 flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                            <BadgeInfo className='h-4 w-4' />
                            Digite seu nome
                        </span>
                    }
                </div>

                <div>
                    <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Sobrenome
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="sobrenome"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            maxLength={40}
                            {...register('lastName')}
                        />
                    </div>
                    {errors.lastName &&
                        <span className="pt-2 flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                            <BadgeInfo className='h-4 w-4' />
                            Digite seu sobrenome
                        </span>
                    }
                </div>
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Email
                </label>
                <div className="mt-2">
                    <input
                        type="email"
                        autoComplete="email"
                        placeholder="Digite seu e-mail"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register('email')}
                    />
                </div>
                {errors.email &&
                    <span className="pt-2 flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.email.message}
                    </span>
                }
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Senha
                    </label>

                </div>

                <div className="mt-2">
                    <input
                        type="password"
                        autoComplete="current-password"
                        placeholder="minímo 6 caracteres"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register('password')}
                    />
                </div>
                {errors.password &&
                    <span className="pt-2 flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.password.message}
                    </span>
                }
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label
                        htmlFor="sector"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Setor
                    </label>
                </div>

                <div className="mt-2">
                    <select
                        aria-label="role"
                        className="inline-flex items-center justify-center gap-x-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="Qual seu time na empresa?"
                        {...register('role')}
                    >
                        <option disabled>Qual seu time na empresa?</option>
                        <option value="comercial">comercial</option>
                        <option value="prospect">prospect</option>
                    </select>

                    <p className="mt-2 text-left text-sm text-gray-600">
                        Faz parte de qual equipe? 'comercial' ou 'prospecção'.
                    </p>
                </div>
                {errors.role &&
                    <span className="pt-3 flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        Escolha qual o seu setor de trabalho
                    </span>
                }
            </div>
        </>
    )
}