import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function financesRoutes(app: FastifyInstance) {
  app.get('/finances', async (req, res) => {
    const finances = await prisma.finance.findMany()
    return finances
  })

  app.post('/finance', async (req, res) => {
    const bodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      category: z.string(),
      type: z.string(),
    })

    const { title, amount, category, type } = bodySchema.parse(req.body)

    const finance = prisma.finance.create({
      data: {
        title,
        amount,
        category,
        type,
      },
    })

    return finance
  })

  app.delete('/finance/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.finance.delete({
      where: {
        id,
      },
    })
  })
}
