import { UseFormRegister } from "react-hook-form";
import { ValidateLoginForm } from "..";
import { BadgeInfo } from "lucide-react";

interface LoginProps {
    register: UseFormRegister<ValidateLoginForm>;
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
        </>
    )
}