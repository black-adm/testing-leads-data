import { UseFormRegister } from 'react-hook-form';
import { ValidateHomeForm } from '../../pages/Login';

interface LoginProps {
    register: UseFormRegister<ValidateHomeForm>;
    errors: any;
}

export function LoginInputs({ register, errors }: LoginProps) {
    return (
        <>
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
                        required
                        placeholder="Digite seu e-mail"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register('email')}
                    />
                </div>
            </div>
            {errors.email &&
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.email.message}
                </span>
            }

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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.role.message}
                </span>
            }
            </div>
        </>
    )
}