import { FaClipboardUser } from 'react-icons/fa6'
import { MdCheckCircle, MdSimCardDownload } from 'react-icons/md'

interface CandidateInfoProps {
  state: 'applied' | 'viewed' | 'inProcess' | 'finalist'
}

export const CandidateInfo = ({ state }: CandidateInfoProps) => {
  return (
    <div className='flex items-center gap-5 p-1'>
      <div className='w-[350px] h-[350px]'>
        <img src="https://www.creative-tim.com/twcomponents/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="" className='object-cover w-full h-full rounded-xl' />
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex items-center justify-between gap-5'>
          <h3 className='text-[30px] leading-8 font-extrabold'>Lionel Andrés Messi Cuccittini</h3>
          <div className='text-4xl text-primary'>
            <FaClipboardUser />
          </div>
        </div>
        <span className='text-2xl font-semibold'>Frontend Web Developer</span>
        <span className='text-xl font-semibold'>Univerdad de Harvard</span>
        <span className='text-lg italic font-semibold'>2 años de experiencia</span>
        <div className='flex flex-col justify-end flex-1 mt-14'>
          <div className='flex items-center justify-between w-full gap-5'>
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
            <div className='flex flex-col items-center justify-center gap-1 mr-3'>
              <span className='text-lg font-semibold'>Descargar CV</span>
              <button className='text-5xl transition-all duration-300 h-11 text-primary hover:text-[52px]'>
                <MdSimCardDownload />
              </button>
            </div>
          </div>
          <button className='flex items-center justify-center w-full gap-2 px-8 py-3 mt-5 font-semibold text-white transition-all duration-300 rounded-md bg-primary hover:brightness-110'>
            <div className='text-2xl'>
              <MdCheckCircle />
            </div>
            Avanzar a la siguiente etapa
          </button>
          <button className='flex items-center justify-center w-full gap-2 px-8 py-3 mt-2 font-semibold transition-all duration-300 border rounded-md bg-background border-primary hover:bg-gray-100'>
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}
