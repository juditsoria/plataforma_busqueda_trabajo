import { z } from 'zod'

export const offerSchema = z.object({
  title: z.string(),
  description: z.string(),
  salary: z.number(),
  location: z.string()
})
