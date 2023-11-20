import { UseFormRegister } from 'react-hook-form';
import { ValidateRegisterForm } from '../validations/ValidateRegisterForm';
import { EmailInput } from '../../../components/EmailInput';
import { BadgeInfo } from 'lucide-react';

interface RegisterProps {
    register: UseFormRegister<ValidateRegisterForm>;
    errors: any;
}

export function RegisterInputs({ register, errors }: RegisterProps) {
    return (
        <>
            <EmailInput
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                errors={errors}
            />

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
        </>
    )
}