import { useEffect, useState } from 'react'
import { useOfferStore } from '../store/offer'
import { type Offer } from '../types/offer'
import api from '@/lib/api'

export const useOffers = ({ idReclutador }: { idReclutador: number }) => {
  const offers = useOfferStore(state => state.offers)
  const setOffers = useOfferStore(state => state.setOffers)
  const [loadingOffers, setLoadingOffers] = useState(false)

  useEffect(() => {
    const getOffers = async () => {
      try {
        setLoadingOffers(true)

        const response = await api.get('/oferta')
        const ofertas = response.data as Offer[]
        const ofertasFiltradas = ofertas.filter(oferta => oferta.id_reclutador === idReclutador)

        setOffers(ofertasFiltradas)
      } catch (error) {
        console.log(error)
      } finally {
        setLoadingOffers(false)
      }
    }

    getOffers()
  }, [])

  return { offers, loadingOffers, setOffers }
}
