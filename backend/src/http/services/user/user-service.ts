import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../../database/client'
import { User } from '../../../entities/user'
import { confirmPassword, hashPassword } from './hash-password-service'
import { app } from '../../../app'

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
    const existsUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (existsUser) {
      reply.code(409).send({
        message: 'Este email já possui cadastro no sistema!',
      })
      return
    }

    const create = await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    })

    reply.code(201).send({
      sucess: true,
      message: 'Usuário criado com sucesso!',
      data: { create },
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
  try {
    const { email, password }: User = request.body as User

    if (!email || !password) {
      reply.code(400).send({
        success: false,
        message: 'Credenciais inválidas!',
      })
      return
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      reply.code(401).send({
        success: false,
        message: 'Credenciais inválidas',
      })
      return
    }

    const validatePassword = await confirmPassword(password, user.password)

    if (!validatePassword) {
      reply.code(401).send({
        success: false,
        message: 'Senha inválida',
      })
      return
    }

    const token = app.jwt.sign({
      user,
    })

    reply.code(200).send({
      success: true,
      message: 'Login bem-sucedido',
      token,
    })
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error)
    reply.code(500).send({
      success: false,
      message: 'Erro ao autenticar usuário',
    })
  }
}
