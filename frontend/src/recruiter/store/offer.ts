import { OFFER_INITIAL_VALUES } from '../initial-values/offer'
import { create } from 'zustand'
import { type Offer } from '../types/offer'

interface OfferStore {
  offers: Offer[]
  setOffers: (offer: Offer[]) => void
}

export const useOfferStore = create<OfferStore>((set) => ({
  offers: [OFFER_INITIAL_VALUES],
  setOffers: (offers: Offer[]) => { set({ offers }) }
}))
