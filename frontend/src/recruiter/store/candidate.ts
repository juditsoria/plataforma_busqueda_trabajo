import { CANDIDATE_INITIAL_VALUES } from '../initial-values/candidate'
import { create } from 'zustand'
import { type Candidate } from '../types/candidate'

interface CandidateStore {
  candidates: Candidate[]
  setCandidates: (candidate: Candidate[]) => void
}

export const useCandidateStore = create<CandidateStore>((set) => ({
  candidates: [CANDIDATE_INITIAL_VALUES],
  setCandidates: (candidates: Candidate[]) => { set({ candidates }) }
}))
