import LayoutRecruiter from '../layout/LayoutRecruiter'
import { redirect, useParams } from 'react-router-dom'
import { FaUserGroup } from 'react-icons/fa6'
import { CandidatesTabs } from '../components/CandidatesTabs'
import { PiBagFill } from 'react-icons/pi'
import { useOffers } from '../hooks/useOffers'
import { useEffect, useState } from 'react'
import { type Offer } from '../types/offer'
import { OFFER_INITIAL_VALUES } from '../initial-values/offer'

export default function CandidatesOfferRecruiter () {
  const { offerId } = useParams()
  const { offers } = useOffers({ idReclutador: 1 })
  const [offer, setOffer] = useState<Offer>(OFFER_INITIAL_VALUES)

  useEffect(() => {
    const offer = offers.find(offer => offer.id_oferta === Number(offerId))

    if (offer) setOffer(offer)
    else redirect('/recruiter/home')
  }, [offerId, offers])

  return (
    <LayoutRecruiter>
      <main className='flex gap-6 py-24 mx-56'>
        <section className='w-full bg-accent rounded-xl p-7'>
          <div className='flex items-center justify-between px-3 mb-6 rounded-md bg-secondary'>
            <h2 className='text-[40px] font-extrabold'>Candidatos <span className='text-primary'>Postulados</span></h2>
            <div className='text-4xl text-primary'>
              <FaUserGroup />
            </div>
          </div>
          <div className='flex flex-col px-3 pt-3 pb-6 mb-6 rounded-md bg-secondary'>
            <div className='flex items-center justify-between gap-5'>
              <h3 className='text-[28px] font-extrabold'>{offer.titulo}</h3>
              <div className='text-4xl text-primary'>
                <PiBagFill />
              </div>
            </div>
            <p className='pr-16 mt-2 overflow-y-auto max-h-56'>{offer.descripcion}</p>
          </div>
          <div className='w-full gap-5'>
            <CandidatesTabs />
          </div>
        </section>
      </main>
    </LayoutRecruiter>
  )
}
