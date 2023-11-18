import { FastifyInstance } from 'fastify'
import { authUser, createUser } from '../services/user/user-service'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', createUser)
  app.post('/login', authUser)
}
