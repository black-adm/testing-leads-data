import { UseFormRegister } from "react-hook-form";
import { ValidateLeadForm } from "../validations/ValidateLeadForm";
import { BadgeInfo, Info, Mailbox } from "lucide-react";

interface InputsProps {
    register: UseFormRegister<ValidateLeadForm>;
    errors: any;
}

export function DetailsInputs({ register, errors }: InputsProps) {
    return (
        <>
            <div className="mb-5">
                <label
                    htmlFor="contact"
                    className="mb-3 flex items-center gap-x-2 text-base font-medium text-[#07074D]"
                >
                    <Info className="h-4 w-4" />
                    Outras informações de contato
                </label>
                <input
                    type="text"
                    required
                    placeholder="whatsapp, telefone fixo ou outro email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('contact')}
                />

                {errors.contact &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.contact.message}
                    </span>
                }
            </div>

            <div className="mb-5">
                <label
                    htmlFor="message"
                    className="mb-3 flex items-center gap-x-2 text-base font-medium text-[#07074D]"
                >
                    <Mailbox className="h-4 w-4" />
                    Mensagem ( opicional )
                </label>

                <textarea
                    rows={4}
                    maxLength={150}
                    placeholder="digite uma mensagem para empresa"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    defaultValue={""}
                    {...register('message')}
                />

                {errors.message &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.message.message}
                    </span>
                }
            </div>

        </>
    )
}