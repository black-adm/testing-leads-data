import { FastifyInstance } from 'fastify'
import {
  createLead,
  getAllLeads,
  getLeadById,
} from '../services/lead/leads-service'

export async function leadsRoutes(app: FastifyInstance) {
  app.post('/', createLead)
  app.get('/', getAllLeads)
  app.get('/:id', getLeadById)
}
