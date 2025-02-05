export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  phone: string
  role: string
  profile_image: string | null
}

export interface Recruiter {
  id: number
  user: User
  company_name: string
}
