import { z } from "zod"
import { UseFormRegister } from "react-hook-form";
import { BadgeInfo, Mails } from "lucide-react"
import { validateEmailInput } from "../types/schemas/inputs-forms-schema";

interface EmailProps {
    className: string
    errors: any;
    register: UseFormRegister<any>;
}

export type ValidateEmailInput = z.infer<typeof validateEmailInput>

export function EmailInput({ className, errors, register }: EmailProps) {
    return (
        <div>
            <label
                htmlFor="email"
                className="mb-3 flex items-center gap-x-2 text-base font-medium text-[#07074D]"
            >
                <Mails className="h-4 w-4" />
                Email
            </label>
            <div className="mt-2">
                <input
                    type="email"
                    autoComplete="email"
                    placeholder="Digite seu e-mail"
                    className={`${className}`}
                    {...register('email')}
                />
            </div>
            {errors.email &&
                <span className={`pt-2 flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red ${className}`}>
                    <BadgeInfo className='h-4 w-4' />
                    {errors.email.message}
                </span>
            }
        </div>
    )
}