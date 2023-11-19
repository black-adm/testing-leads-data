import { UseFormRegister } from "react-hook-form";
import { ValidateInputForm } from "./MultiStep";
import { AtSign, BadgeInfo, Building, Phone } from "lucide-react";

interface InputsProps {
    register: UseFormRegister<ValidateInputForm>;
    errors: any;
}

export function PersonalInput({ register, errors }: InputsProps) {
    return (
        <>
            <div className="mb-5">
                <label
                    htmlFor="company-name"
                    className="mb-3 flex items-center gap-x-3 text-base font-medium text-[#07074D]"
                >
                    <Building className="h-5 w-5" />
                    Nome da empresa
                </label>
                <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="nome completo da empresa"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('companyName')}
                />

                {errors.companyName &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.email.companyName}
                    </span>
                }
            </div>

            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="mb-3 flex items-center gap-x-3 text-base font-medium text-[#07074D]"
                >
                    <AtSign className="h-5 w-5" />
                    Email
                </label>
                <input
                    type="email"
                    required
                    placeholder="digite o email da empresa"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('email')}
                />

                {errors.email &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.email.message}
                    </span>
                }
            </div>

            <div className="mb-5">
                <label
                    htmlFor="phone"
                    className="mb-3 flex items-center gap-x-3 text-base font-medium text-[#07074D]"
                >
                    <Phone className="h-5 w-5" />
                    Telefone
                </label>
                <input
                    type="text"
                    required
                    placeholder="telefone fixo ou whatsapp"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('phone')}
                />

                {errors.phone &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.phone.message}
                    </span>
                }
            </div>
        </>
    )
}