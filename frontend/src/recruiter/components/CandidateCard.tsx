import { IoIosArrowForward } from 'react-icons/io'
import { type Aplicacion } from '../types/aplicacion'
import { useCandidates } from '../hooks/useCandidates'
import { useEffect, useState } from 'react'
import { type Candidate } from '../types/candidate'

interface CandidateCardProps {
  candidate: Aplicacion
}

export const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const [candidateInfo, setCandidateInfo] = useState<Candidate | undefined>(undefined)
  const { candidates } = useCandidates()

  useEffect(() => {
    const candidateInfoCard = candidates.find(c => c.user.id === candidate.candidato.id)
    setCandidateInfo(candidateInfoCard)
  }, [candidates])

  return (
    <article className='relative flex items-center justify-between gap-5 py-5 pl-5 pr-20 transition-all duration-300 cursor-pointer bg-secondary rounded-xl hover:bg-secondary/70 group'>
      <div className='flex items-center justify-start h-full gap-5'>
        <div className='h-32 w-52'>
          <img src="https://www.creative-tim.com/twcomponents/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="" className='object-cover w-full h-full rounded-xl' />
        </div>
        <div className='flex flex-col items-start justify-between w-full'>
          <span className='text-xl text-left font-bold text-ellipsis overflow-hidden whitespace-nowrap w-[370px]'>{candidate.candidato.first_name}</span>
          <span className='text-ellipsis text-left overflow-hidden whitespace-nowrap w-[370px] -mt-1 font-semibold'>{candidate.candidato.last_name}</span>
          <span className='text-ellipsis text-left overflow-hidden whitespace-nowrap w-[370px] -mt-1 mb-2'>{candidateInfo?.educacion}</span>
          <span className='text-sm text-left text-ellipsis overflow-hidden whitespace-nowrap w-[370px] italic font-semibold'>{candidateInfo?.experiencia}</span>
        </div>
      </div>
      <div className='flex items-center justify-start w-56 gap-2'>
        {
          candidate.estado === 'applied' && (
            <span className='bg-[url(/circle-progress.svg)] bg-left-top w-[90px] h-[90px] [background-size:950px] content-none'></span>
          )
        }
        {
          candidate.estado === 'viewed' && (
            <span className='bg-[url(/circle-progress.svg)] bg-[-90px_0px] w-[90px] h-[90px] [background-size:950px] content-none'></span>
          )
        }
        {
          candidate.estado === 'inProcess' && (
            <span className='bg-[url(/circle-progress.svg)] bg-[-185px_0px] w-[90px] h-[90px] [background-size:950px] content-none'></span>
          )
        }
        {
          candidate.estado === 'finalist' && (
            <span className='bg-[url(/circle-progress.svg)] bg-[-280px_0px] w-[90px] h-[90px] [background-size:950px] content-none'></span>
          )
        }
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>
            {
              candidate.estado === 'applied' && 'Aplicado'
            }
            {
              candidate.estado === 'viewed' && 'Visto'
            }
            {
              candidate.estado === 'inProcess' && 'En proceso'
            }
            {
              candidate.estado === 'finalist' && 'Finalista'
            }
          </span>
          <span className='italic text-gray-700'>{candidate.fecha_aplicacion.toString()}</span>
        </div>
      </div>
      <div className='absolute right-5 top-[40%] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-5 group-hover:translate-x-0'>
        <IoIosArrowForward className='text-4xl text-primary' />
      </div>
    </article>
  )
}
