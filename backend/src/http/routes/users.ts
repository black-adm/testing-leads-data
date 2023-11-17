import { FastifyInstance } from 'fastify'
import { prisma } from '../../database/client'
import { User } from '../../entities/user'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', async (request, reply) => {
    try {
      const user: User = request.body as User

      if (!user.email || !user.role) {
        reply.code(400).send({
          success: false,
          message: 'Dados de usuário incompletos',
        })
        return
      }

      const create = await prisma.user.create({
        data: user,
      })

      reply.code(201).send({
        sucess: true,
        message: 'Usuário criado com sucesso!',
        data: create,
      })
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      reply.code(500).send({
        success: false,
        message: 'Erro ao criar usuário',
      })
    }
  })
}
