import { z } from "zod"

export type ValidateRegisterForm = z.infer<typeof validateRegisterFormSchema>

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