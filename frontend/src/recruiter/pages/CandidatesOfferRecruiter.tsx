import LayoutRecruiter from '../layout/LayoutRecruiter'
import { useParams } from 'react-router-dom'
import { FaUserGroup } from 'react-icons/fa6'
import { CandidatesTabs } from '../components/CandidatesTabs'
import { PiBagFill } from 'react-icons/pi'

export default function CandidatesOfferRecruiter () {
  const { offerId } = useParams()
  console.log(offerId)

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
              <h3 className='text-[28px] font-extrabold'>Frontend Web Developer</h3>
              <div className='text-4xl text-primary'>
                <PiBagFill />
              </div>
            </div>
            <p className='pr-16 mt-2 overflow-y-auto max-h-56'>Término fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.Término fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.jo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, DoctoradoTérmino fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.</p>
          </div>
          <div className='w-full gap-5'>
            <CandidatesTabs />
          </div>
        </section>
      </main>
    </LayoutRecruiter>
  )
}
