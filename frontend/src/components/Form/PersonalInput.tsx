import { BadgeInfo } from "lucide-react";
import { UseFormRegister } from "react-hook-form";
import { ValidateInputForm } from "../../pages/Form";

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
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
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
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
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
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
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