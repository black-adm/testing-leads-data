import { app } from '../../../app'

export async function hashPassword(password: string): Promise<string> {
  return app.bcrypt.hash(password)
}

export async function confirmPassword(password: string, hash: string) {
  return app.bcrypt.compare(password, hash)
}
