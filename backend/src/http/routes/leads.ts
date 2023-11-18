import { FastifyInstance } from 'fastify'
import {
  createLead,
  editLead,
  getAllLeads,
  getLeadById,
} from '../services/lead/leads-service'

export async function leadsRoutes(app: FastifyInstance) {
  app.post('/', createLead)
  app.get('/', getAllLeads)
  app.get('/:id', getLeadById)
  app.put('/:id', editLead)
}
