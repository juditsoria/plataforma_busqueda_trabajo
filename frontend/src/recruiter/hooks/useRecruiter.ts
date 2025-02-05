import { useEffect, useState } from 'react'
import { useRecruiterStore } from '../store/recruiter'
import api from '@/lib/api'
import { type Recruiter } from '../types/recruiter'

export const useRecruiter = ({ id }: { id: number }) => {
  const recruiter = useRecruiterStore(state => state.recruiter)
  const setRecruiter = useRecruiterStore(state => state.setRecruiter)
  const [loadingRecruiter, setLoadingRecruiter] = useState(false)

  useEffect(() => {
    const getRecruiter = async () => {
      try {
        setLoadingRecruiter(true)

        const response = await api.get(`/reclutador/recruiters/${id}`)

        setRecruiter(response.data as Recruiter)
      } catch (error) {
        console.log(error)
      } finally {
        setLoadingRecruiter(false)
      }
    }

    getRecruiter()
  }, [])

  return { recruiter, loadingRecruiter, setRecruiter }
}
