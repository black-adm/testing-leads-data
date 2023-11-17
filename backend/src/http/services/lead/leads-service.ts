import { Lead } from '../../../entities/lead'
import { prisma } from '../../../database/client'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function createLeadService(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const lead: Lead = request.body as Lead
    const create = await prisma.lead.create({
      data: lead,
    })

    reply.code(201).send({
      success: true,
      message: 'Lead criado com sucesso!',
      data: create,
    })
  } catch (error) {
    console.error('Erro ao processar o lead:', error)
    reply
      .code(500)
      .send({ success: false, message: 'Erro ao processar o lead' })
  }
}

export async function getAllLeadsService() {
  const listLeads = await prisma.lead.findMany()
  return listLeads
}
