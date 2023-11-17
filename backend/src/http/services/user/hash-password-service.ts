import { app } from '../../../app'

export async function hashPasswordService(password: string): Promise<string> {
  return app.bcrypt.hash(password)
}
