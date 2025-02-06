import { FaSearch } from 'react-icons/fa'
import { ModalOfferForm } from './ModalOfferForm'
import { type Offer } from '../types/offer'

interface HeaderOfferActionsProps {
  offers: Offer[]
  setOffers: any
}

export const HeaderOfferActions = ({ offers, setOffers }: HeaderOfferActionsProps) => {
  return (
    <div className='flex items-center justify-between gap-5 mb-5'>
      <ModalOfferForm offers={offers} setOffers={setOffers} />
      <div className="w-[70%] relative">
        <input type="text" placeholder="Buscar oferta" className="w-full px-4 py-3 text-black placeholder-gray-600 rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" />
        <div className='absolute top-0 right-0 flex items-center justify-center h-full gap-2 px-4 py-3 font-semibold text-white bg-primary rounded-tr-md rounded-br-md'>
          <div className='text-xl'>
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  )
}
