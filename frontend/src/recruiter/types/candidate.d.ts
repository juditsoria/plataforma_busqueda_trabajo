import { type User } from './recruiter'

export interface Candidate {
  id_candidato: number
  user: User
  experiencia: string
  educacion: string
  cv: string
}
