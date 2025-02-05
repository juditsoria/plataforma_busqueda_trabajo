import { Card } from '@/components/ui/card'
import { IoIosArrowForward } from 'react-icons/io'

interface CandidateCardProps {
  state: 'applied' | 'viewed' | 'inProcess' | 'finalist'
}

export const CandidateCard = ({ state }: CandidateCardProps) => {
  return (
    <Card className='bg-secondary'>
      <article className='relative flex items-center justify-between gap-5 py-5 pl-5 pr-20 transition-all duration-300 cursor-pointer bg-secondary rounded-xl hover:bg-secondary/70 group'>
        <div className='flex items-center justify-start h-full gap-5'>
          <div className='h-32 w-52'>
            <img src="https://www.creative-tim.com/twcomponents/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="" className='object-cover w-full h-full rounded-xl' />
          </div>
          <div className='flex flex-col items-start justify-between w-full'>
            <span className='text-xl text-left font-bold text-ellipsis overflow-hidden whitespace-nowrap w-[370px]'>Lionel Andrés Messi Cuccittini</span>
            <span className='text-ellipsis text-left overflow-hidden whitespace-nowrap w-[370px] -mt-1 font-semibold'>Frontend Web Developer</span>
            <span className='text-ellipsis text-left overflow-hidden whitespace-nowrap w-[370px] -mt-1 mb-2'>Universidad de Harvard</span>
            <span className='text-sm text-left text-ellipsis overflow-hidden whitespace-nowrap w-[370px] italic font-semibold'>2 años de experiencia</span>
          </div>
        </div>
        <div className='flex items-center justify-start w-56 gap-2'>
          {
            state === 'applied' && (
              <span className='bg-[url(/circle-progress.svg)] bg-left-top w-[90px] h-[90px] [background-size:950px] content-none'></span>
            )
          }
          {
            state === 'viewed' && (
              <span className='bg-[url(/circle-progress.svg)] bg-[-90px_0px] w-[90px] h-[90px] [background-size:950px] content-none'></span>
            )
          }
          {
            state === 'inProcess' && (
              <span className='bg-[url(/circle-progress.svg)] bg-[-185px_0px] w-[90px] h-[90px] [background-size:950px] content-none'></span>
            )
          }
          {
            state === 'finalist' && (
              <span className='bg-[url(/circle-progress.svg)] bg-[-280px_0px] w-[90px] h-[90px] [background-size:950px] content-none'></span>
            )
          }
          <div className='flex flex-col'>
            <span className='text-xl font-bold'>
              {
                state === 'applied' && 'Aplicado'
              }
              {
                state === 'viewed' && 'Visto'
              }
              {
                state === 'inProcess' && 'En proceso'
              }
              {
                state === 'finalist' && 'Finalista'
              }
            </span>
            <span className='italic text-gray-700'>Hace 4 horas</span>
          </div>
        </div>
        <div className='absolute right-5 top-[40%] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-5 group-hover:translate-x-0'>
          <IoIosArrowForward className='text-4xl text-primary' />
        </div>
      </article>
    </Card>
  )
}
