import { UseFormRegister } from "react-hook-form";
import { ValidateLeadForm } from "../../../types/schemas/inputs-forms-schema";
import { BadgeInfo, Map, MapPin } from "lucide-react";

interface InputsProps {
    register: UseFormRegister<ValidateLeadForm>;
    errors: any;
}

export function AddressInputs({ register, errors }: InputsProps) {
    return (
        <>
            <div className="mb-5">
                <label
                    htmlFor="cep"
                    className="mb-3 flex items-center gap-x-2 text-base font-medium text-[#07074D]"
                >
                    <Map className="h-4 w-4" />
                    Cep
                </label>
                <input
                    type="text"
                    required
                    placeholder="Código postal do endereço"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('cep')}
                />

                {errors.cep &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.cep.message}
                    </span>
                }
            </div>


            <div className="mb-5">
                <label
                    htmlFor="address"
                    className="mb-3 flex items-center gap-x-2 text-base font-medium text-[#07074D]"
                >
                    <MapPin className="h-4 w-4" />
                    Endereço
                </label>
                <input
                    type="text"
                    required
                    placeholder="Avenida Paulista"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('address')}
                />

                {errors.address &&
                    <span className="flex items-center gap-x-1 text-xs font-medium tracking-tight text-primary-red">
                        <BadgeInfo className='h-4 w-4' />
                        {errors.address.message}
                    </span>
                }
            </div>
        </>
    )
}