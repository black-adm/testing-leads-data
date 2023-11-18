import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyBcrypt from 'fastify-bcrypt'
import fastifyJwt from '@fastify/jwt'

import { leadsRoutes } from './http/routes/leads'
import { usersRoutes } from './http/routes/users'

export const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
})

app.register(fastifyJwt, {
  secret: 'secret_key',
  sign: {
    expiresIn: '4h',
  },
})

app.register(leadsRoutes, {
  prefix: 'leads',
})

app.register(usersRoutes, {
  prefix: 'user',
})

app.register(fastifyBcrypt)
