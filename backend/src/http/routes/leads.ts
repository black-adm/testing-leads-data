import { Lead } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import { prisma } from '../../database/client'
import { User } from '../../entities/user'

export async function leadsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    try {
      const lead: Lead = request.body as Lead
      const create = await prisma.lead.create({
        data: lead,
      })

      reply.code(201).send({
        sucess: true,
        message: 'Lead criado com sucesso!',
        data: create,
      })
    } catch (error) {
      console.error('Erro ao processar o lead:', error)
      reply
        .code(500)
        .send({ sucess: false, message: 'Erro ao processar o lead' })
    }
  })

  app.get('/', async () => {
    const list = await prisma.lead.findMany()

    return list
  })

  app.post('/user', async (request, reply) => {
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
