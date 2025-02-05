import { z } from 'zod'

export const formSignUpSchema = z.object({
  firstName: z.string().min(1, {
    message: 'El nombre debe tener al menos 1 caractere.'
  }).max(150, {
    message: 'El nombre debe tener como máximo 150 caracteres.'
  }),
  lastName: z.string().min(1, {
    message: 'El apellido debe tener al menos 1 caractere.'
  }).max(150, {
    message: 'El apellido debe tener como máximo 150 caracteres.'
  }),
  role: z.string(),
  email: z.string().email({
    message: 'Correo electrónico inválido.'
  }),
  password: z.string(),
  password2: z.string()
}).required().refine(data => data.password === data.password2, {
  message: 'Las contraseñas no coinciden.',
  path: ['password2']
})

export const formSignInSchema = z.object({
  email: z.string().email({
    message: 'Correo electrónico inválido.'
  }),
  password: z.string()
}).required()
