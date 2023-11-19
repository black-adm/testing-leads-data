import { UseFormRegister } from 'react-hook-form';
import { ValidateInputForm } from '../../pages/Form';
import { BadgeInfo } from 'lucide-react';

interface InputsProps {
    register: UseFormRegister<ValidateInputForm>;
    errors: any;
}

export function FormInputs({ register, errors }: InputsProps) {
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
                    placeholder="Nome completo da empresa"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('companyName')}
                />
            </div>
            {errors.companyName &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.email.companyName}
                </span>
            }

            <div className="mb-5">
                <label
                    htmlFor="cep"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Cep
                </label>
                <input
                    type="text"
                    required
                    placeholder="Código postal do endereço"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('cep')}
                />
            </div>
            {errors.cep &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.cep.message}
                </span>
            }

            <div className="mb-5">
                <label
                    htmlFor="address"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Endereço
                </label>
                <input
                    type="text"
                    required
                    placeholder="Avenida Paulista"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('address')}
                />
            </div>
            {errors.address &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.address.message}
                </span>
            }

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
                    placeholder="Digite seu email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('email')}
                />
            </div>
            {errors.email &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.email.message}
                </span>
            }

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
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('phone')}
                />
            </div>
            {errors.phone &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.phone.message}
                </span>
            }

            <div className="mb-5">
                <label
                    htmlFor="contact"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Contato
                </label>
                <input
                    type="text"
                    required
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('contact')}
                />
            </div>
            {errors.contact &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.contact.message}
                </span>
            }

            <div className="mb-5">
                <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Mensagem ( opicional )
                </label>
                <textarea
                    rows={4}
                    maxLength={150}
                    placeholder="Digite uma mensagem para empresa"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    defaultValue={""}
                    {...register('message')}
                />
            </div>
            {errors.message &&
                <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                    <BadgeInfo className='h-4 w-4' />
                    {errors.message.message}
                </span>
            }
        </>

    )
}