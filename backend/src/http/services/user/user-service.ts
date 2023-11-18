import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../../database/client'
import { User } from '../../../entities/user'
import { hashPassword } from './hash-password-service'

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const user: User = request.body as User

    if (!user) {
      reply.code(400).send({
        success: false,
        message: 'Dados de usuário incompletos',
      })
      return
    }

    const hashedPassword = await hashPassword(user.password)

    const create = await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
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
}

export async function authUser(request: FastifyRequest, reply: FastifyReply) {
  const { email, password }: User = request.body as User

  try {
    const auth = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    })

    reply.code(200).send({
      sucess: true,
    })
    return auth
  } catch (error) {
    reply.code(403).send({
      sucess: false,
      message: 'Usuário ou dados de acesso inválido!',
    })
  }
}
