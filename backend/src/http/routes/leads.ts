import { FastifyInstance } from 'fastify'
import {
  createLeadService,
  getAllLeadsService,
} from '../services/lead/leads-service'

export async function leadsRoutes(app: FastifyInstance) {
  app.post('/', createLeadService)

  app.get('/', getAllLeadsService)
}
