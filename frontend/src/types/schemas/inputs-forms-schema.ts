import { z } from "zod"

export type ValidateEmailInput = z.infer<typeof validateEmailInput>
export type ValidateLoginForm = z.infer<typeof validateLoginFormSchema>
export type ValidateRegisterForm = z.infer<typeof validateRegisterFormSchema>
export type ValidateLeadForm = z.infer<typeof validateLeadForm>

export const validateEmailInput = z.object({
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!')
})

export const validateLoginFormSchema = z.object({
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})

export const validateRegisterFormSchema = z.object({
    firstName: z.string().nonempty('O campo nome é obrigatório!'),
    lastName: z.string().nonempty('O campo sobrenome é obrigatório!'),
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    role: z.enum(['comercial', 'prospect'])
})

export const validateLeadForm = z.object({
    companyName: z.string().nonempty('O campo de senha é obrigatório!').min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    cep: z.string().nonempty('O campo de cep é obrigatório!'),
    address: z.string().nonempty('O campo de endereço é obrigatório!'),
    email: z.string().email().nonempty('O campo de e-mail é obrigatório!').email('Formato de e-mail inválido!'),
    phone: z.string().nonempty('O campo de telefone é obrigatório!'),
    contact: z.string().nonempty('O campo de contato é obrigatório!'),
    message: z.string(),
});
