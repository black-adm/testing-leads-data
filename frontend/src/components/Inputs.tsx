import { UseFormRegister } from 'react-hook-form';
import { ValidateInputForm } from '../pages/Form';

interface InputsProps {
    register: UseFormRegister<ValidateInputForm>;
    errors: any;
}

export function Inputs({ register, errors }: InputsProps) {
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
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
                <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    {errors.message.message}
                </span>
            }
        </>

    )
}