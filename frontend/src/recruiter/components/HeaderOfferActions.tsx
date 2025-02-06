import { FaSearch } from 'react-icons/fa'
import { ModalOfferForm } from './ModalOfferForm'

export const HeaderOfferActions = () => {
  return (
    <div className='flex justify-between items-center mb-5 gap-5'>
      <ModalOfferForm />
      <div className="w-[70%] relative">
        <input type="text" placeholder="Buscar oferta" className="w-full bg-secondary text-black placeholder-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" />
        <div className='bg-primary py-3 px-4 rounded-tr-md rounded-br-md text-white flex items-center justify-center gap-2 font-semibold absolute right-0 top-0 h-full'>
          <div className='text-xl'>
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  )
}
