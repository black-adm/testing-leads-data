export function Form() {
    return (
        <>
            {/* component */}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label
                                htmlFor="company-name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Nome da empresa
                            </label>
                            <input
                                type="text"
                                name="company-name"
                                placeholder="Nome completo da empresa"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="cep"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Cep
                            </label>
                            <input
                                type="text"
                                name="cep"
                                placeholder="Código postal do endereço"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="address"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Endereço
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Avenida Paulista"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
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
                                name="phone"
                                placeholder="Enter your subject"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Mensagem ( opicional )
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                placeholder="Digite uma mensagem para empresa"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>

                        <div>
                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}
