import {z} from 'zod'

export const FormSchema = z.object({
  clientId: z.string().min(3).max(255),
  clientSecret: z.string().min(3).max(255),
  subdomain: z.string().min(3).max(255),
  userId: z.string().min(3).max(255),
  password: z.string().min(6).max(100),
  email: z.string().email(),
  notificationEmail: z.string().email(),
  operation: z.string().min(2).max(10),
  role: z.string(),
  isAPI: z.enum(["yes", "no"]),
  isLocked: z.enum(["yes", "no"]),
  wantDisable: z.boolean().default(false).optional(),
});


