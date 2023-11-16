import fastify from 'fastify'

import { leadsRoutes } from './http/routes/leads'

export const app = fastify()

app.register(leadsRoutes, {
  prefix: 'leads',
})
