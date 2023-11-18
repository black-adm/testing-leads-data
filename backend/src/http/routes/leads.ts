import { FastifyInstance } from 'fastify'
import {
  createLead,
  deleteLead,
  editLead,
  getAllLeads,
  getLeadById,
} from '../services/lead/leads-service'

export async function leadsRoutes(app: FastifyInstance) {
  app.get('/', getAllLeads)
  app.get('/:id', getLeadById)
  app.post('/', createLead)
  app.put('/:id', editLead)
  app.delete('/:id', deleteLead)
}
