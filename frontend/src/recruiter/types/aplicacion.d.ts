import { type User } from './recruiter'

export interface Aplicacion {
  id_aplicacion: number
  candidato: User
  fecha_aplicacion: string | Date
  estado: string
  id_oferta: number
}
