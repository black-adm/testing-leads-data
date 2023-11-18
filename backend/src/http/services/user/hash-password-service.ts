import { app } from '../../../app'

export async function hashPassword(password: string): Promise<string> {
  return app.bcrypt.hash(password)
}
