import fastify from 'fastify'
import cors from '@fastify/cors'
import { financesRoutes } from './routes/finance'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(financesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server running on localhost:3333')
  })
