import fastify from 'fastify'
import cors from '@fastify/cors'

import { leadsRoutes } from './http/routes/leads'
import { usersRoutes } from './http/routes/users'

export const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
})

app.register(leadsRoutes, {
  prefix: 'leads',
})

app.register(usersRoutes, {
  prefix: 'user',
})
