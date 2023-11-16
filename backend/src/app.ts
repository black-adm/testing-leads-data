import fastify from 'fastify'
import cors from '@fastify/cors'

import { leadsRoutes } from './http/routes/leads'

export const app = fastify()

app.register(leadsRoutes, {
  prefix: 'leads',
})

app.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
})
