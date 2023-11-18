import { app } from '../../../app'

export async function getTokenService() {
  app.addHook('onRequest', async (request) => {
    try {
      const token = await request.jwtDecode()
      return { token }
    } catch (err) {
      throw new Error('Token inválido ou inexistente!')
    }
  })
}
