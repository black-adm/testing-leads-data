import { FastifyInstance } from 'fastify'
import {
  authUserService,
  createUserService,
} from '../services/user/user-service'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', createUserService)
  app.post('/login', authUserService)
}
