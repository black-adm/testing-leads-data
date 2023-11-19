import { z } from 'zod';

export type ValidateLeadForm = z.infer<typeof validateLeadForm>

export const validateLeadForm = z.object({
    companyName: z.string().nonempty('O campo de senha é obrigatório!').min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    cep: z.string().nonempty('O campo de cep é obrigatório!'),
    address: z.string().nonempty('O campo de endereço é obrigatório!'),
    email: z.string().email().nonempty('O campo de e-mail é obrigatório!').email('Formato de e-mail inválido!'),
    phone: z.string().nonempty('O campo de telefone é obrigatório!'),
    contact: z.string().nonempty('O campo de contato é obrigatório!'),
    message: z.string(),
});