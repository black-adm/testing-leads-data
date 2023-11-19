import { z } from "zod"

export type ValidateLoginForm = z.infer<typeof validateLoginFormSchema>

export const validateLoginFormSchema = z.object({
    email: z.string().email()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})
