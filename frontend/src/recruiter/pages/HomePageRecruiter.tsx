import LayoutRecruiter from '../layout/LayoutRecruiter'
import { DrawerOfferInfo } from '../components/DrawerOfferInfo'
import { HeaderOfferActions } from '../components/HeaderOfferActions'
import { PiBagFill } from 'react-icons/pi'
import { useOffers } from '../hooks/useOffers'

export default function HomePageRecruiter () {
  const { offers } = useOffers({ idReclutador: 1 })

  return (
    <LayoutRecruiter>
      <main className='flex gap-6 py-24 mx-56'>
        <section className='w-full bg-accent rounded-xl p-7'>
          <div className='flex items-center justify-between px-3 mb-6 rounded-md bg-secondary'>
            <h2 className='text-[40px] font-extrabold'>Mis <span className='text-primary'>Ofertas</span></h2>
            <div className='text-4xl text-primary'>
              <PiBagFill />
            </div>
          </div>
          <HeaderOfferActions />
          <div className='flex flex-col w-full gap-5'>
            {
              offers.map(offer => (
                <DrawerOfferInfo key={offer.id_oferta} />
              ))
            }
          </div>
        </section>
      </main>
    </LayoutRecruiter>
  )
}
