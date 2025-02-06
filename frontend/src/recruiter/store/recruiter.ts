import { RECRUITER_INITIAL_VALUES } from '../initial-values/recruiter'
import { create } from 'zustand'
import { type Recruiter } from '../types/recruiter'

interface RecruiterStore {
  recruiter: Recruiter
  setRecruiter: (recruiter: Recruiter) => void
}

export const useRecruiterStore = create<RecruiterStore>((set) => ({
  recruiter: RECRUITER_INITIAL_VALUES,
  setRecruiter: (recruiter: Recruiter) => { set({ recruiter }) }
}))
