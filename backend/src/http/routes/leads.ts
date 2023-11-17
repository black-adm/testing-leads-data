import { Lead } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import { prisma } from '../../database/client'

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
}
