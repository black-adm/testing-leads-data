import { Lead } from '../../../entities/lead'
import { prisma } from '../../../database/client'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function createLead(request: FastifyRequest, reply: FastifyReply) {
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

export async function getAllLeads() {
  const listLeads = await prisma.lead.findMany()
  return listLeads
}

export async function getLeadById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const { id } = request.params
  const getLead = await prisma.lead.findUnique({
    where: {
      id,
    },
  })

  if (!getLead && getLead == null) {
    reply.status(404).send({
      sucess: false,
      message: 'Esse lead não existe no sistema!',
    })
  }

  reply.status(200).send({
    success: true,
    message: 'Lead encontrado com sucesso!',
    data: getLead,
  })
}

export async function editLead(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const { id } = request.params

  try {
    const lead: Lead = request.body as Lead

    const edit = await prisma.lead.update({
      where: { id },
      data: lead,
    })

    reply.code(200).send({
      success: true,
      message: 'Lead atualizado com sucesso!',
      data: edit,
    })
  } catch (error) {
    console.error('Erro ao atualizar o lead:', error)
    reply.code(500).send({
      success: false,
      message: 'Erro ao atualizar o lead, verifique os dados inseridos!',
    })
  }
}

export async function deleteLead(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const { id } = request.params

  const deleteById = await prisma.lead.delete({
    where: { id },
  })

  if (!deleteLead && id === null) {
    reply.code(500).send({
      sucess: false,
      message: 'Erro ao tentar deletar lead, tente novamente!',
    })
  }

  reply.code(202).send({
    success: true,
    message: 'Lead deletado do sistema!',
  })
  return deleteById
}
