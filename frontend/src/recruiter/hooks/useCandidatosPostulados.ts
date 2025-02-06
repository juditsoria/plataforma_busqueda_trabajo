import { useEffect, useState } from 'react'
import { useAplicacionStore } from '../store/aplicacion'
import axios from 'axios'
import { type Aplicacion } from '../types/aplicacion'

export const useCandidatesPostulates = ({ idOferta }: { idOferta: number }) => {
  const candidatesPostulates = useAplicacionStore(state => state.aplicaciones)
  const setCandidatesPostulates = useAplicacionStore(state => state.setAplicaciones)
  const [loadingCandidatesPostulates, setLoadingCandidatesPostulates] = useState(false)

  useEffect(() => {
    const getCandidatesPostulates = async () => {
      try {
        setLoadingCandidatesPostulates(true)

        const response = await axios.get('http://localhost:8000/aplicaciones/aplicaciones/')
        const candidatesPostulatesOffer: Aplicacion[] = response.data.filter((c: Aplicacion) => c.id_oferta === idOferta)

        setCandidatesPostulates(candidatesPostulatesOffer)
      } catch (error) {
        console.log(error)
      } finally {
        setLoadingCandidatesPostulates(false)
      }
    }

    getCandidatesPostulates()
  }, [])

  return { candidatesPostulates, loadingCandidatesPostulates, setCandidatesPostulates }
}
