import { IoIosArrowForward } from 'react-icons/io'

export const Offer = () => {
  return (
    <article className='relative bg-secondary rounded-xl flex justify-between items-center pl-5 pr-20 pt-10 pb-[72px] gap-5 cursor-pointer hover:bg-secondary/70 transition-all duration-300 group'>
      <div className='flex items-center justify-start w-full gap-5'>
        <div className='w-32'>
          <img src="https://media.magneto365.com/image_assets/files/100969/original-07667a75-eade-41d6-8663-8aced564738e-.png?Expires=1737935999&Key-Pair-Id=KYGE9B84R3EDO&Signature=tZ-Hd8gFCuX8hwQBCVTwBRYAY0BnlhKEvkbVm5OSUddRxBDty4pW6ZhRVUuUfpySRm33hdCPpscQbvAb6rPpcXx2s2ZIbu3LpVLIA~qMGs39SqbTayxobrKi3QzNSsElLWZgLkRaYYFtw4K7Q7HX5wycUdDCkIDPXJGkCM1WMxO9LAgQBNvYOdcVADp27vf6rcMG1Ye1R4L3TOFB1ZAQ1qzc5q~R2usZseaZt-cMnxLvivxPa7qw5fOMC3IDTEypd82X-1sFWA2pOuhRknVYNiEthp6yw4EeQ58IsZDP6XNVOdFr-LDKim6YSEhMuJvRurpDLrxPIkU-6BFJOlDbZQ__" alt="" className='w-full' />
        </div>
        <div className='flex flex-col items-start justify-between w-full'>
          <span className='text-xl text-left font-bold text-ellipsis overflow-hidden whitespace-nowrap w-[370px]'>Frontend Web Developer</span>
          <span className='text-ellipsis text-left overflow-hidden whitespace-nowrap w-[370px] -mt-1 font-semibold'>ACTUANDO SAS</span>
          <span className='text-ellipsis text-left overflow-hidden whitespace-nowrap w-[370px] -mt-1 mb-2'>Bogota DC</span>
          <span className='text-sm text-left text-ellipsis overflow-hidden whitespace-nowrap w-[370px] italic font-semibold'>01/01/2025</span>
        </div>
      </div>
      <div className='flex items-end justify-end w-3/6 h-full'>
        <span className='text-right text-gray-600 line-clamp-3'>Término fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.Término fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.jo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado</span>...
      </div>
      <div className='absolute right-5 top-[40%] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-5 group-hover:translate-x-0'>
        <IoIosArrowForward className='text-4xl text-primary' />
      </div>
      <div className='absolute flex items-center justify-center gap-2 bottom-4 left-6'>
        <span className='italic font-semibold'>Postulados:</span>
        <span className='px-3 py-1 text-xl italic font-bold bg-white border border-primary rounded-xl'>100</span>
      </div>
      <div className='absolute flex items-center justify-center gap-2 bottom-4 right-5'>
        <span className='italic font-semibold'>Salario:</span>
        <span className='px-3 py-1 text-xl italic font-bold bg-white border border-primary rounded-xl'>$ 1.000.000</span>
      </div>
    </article>
  )
}
