import {z} from 'zod'

export const FormSchema = z.object({
  clientId: z.string().min(3).max(255),
  clientSecret: z.string().min(3).max(255),
  userId: z.string().min(3).max(255),
  password: z.string().min(6).max(100),
  email: z.string().email(),
  notificationEmail: z.string().email(),
});


