import LayoutRecruiter from '../layout/LayoutRecruiter'
import { DrawerOfferInfo } from '../components/DrawerOfferInfo'
import { HeaderOfferActions } from '../components/HeaderOfferActions'
import { PiBagFill } from 'react-icons/pi'

export default function HomePageRecruiter () {
  return (
    <LayoutRecruiter>
      <main className='mx-56 py-24 flex gap-6'>
        <section className='bg-accent w-full rounded-xl p-7'>
          <div className='flex justify-between items-center bg-secondary rounded-md mb-6 px-3'>
            <h2 className='text-[40px] font-extrabold'>Mis <span className='text-primary'>Ofertas</span></h2>
            <div className='text-4xl text-primary'>
              <PiBagFill />
            </div>
          </div>
          <HeaderOfferActions />
          <div className='w-full flex flex-col gap-5'>
            <DrawerOfferInfo />
            <DrawerOfferInfo />
            <DrawerOfferInfo />
          </div>
        </section>
      </main>
    </LayoutRecruiter>
  )
}
