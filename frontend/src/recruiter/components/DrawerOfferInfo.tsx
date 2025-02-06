import { IoPaperPlane } from 'react-icons/io5'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Offer } from './Offer'
import { FaPencil } from 'react-icons/fa6'

export const DrawerOfferInfo = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Offer />
        </button>
      </DrawerTrigger>
      <DrawerContent className='bg-accent'>
        <div className="mx-56 my-5 rounded-xl bg-secondary">
          <div className="flex gap-8 p-7 min-h-[320px]">
            <div className='w-[20%]'>
              <img src="https://media.magneto365.com/image_assets/files/100969/original-07667a75-eade-41d6-8663-8aced564738e-.png?Expires=1737935999&Key-Pair-Id=KYGE9B84R3EDO&Signature=tZ-Hd8gFCuX8hwQBCVTwBRYAY0BnlhKEvkbVm5OSUddRxBDty4pW6ZhRVUuUfpySRm33hdCPpscQbvAb6rPpcXx2s2ZIbu3LpVLIA~qMGs39SqbTayxobrKi3QzNSsElLWZgLkRaYYFtw4K7Q7HX5wycUdDCkIDPXJGkCM1WMxO9LAgQBNvYOdcVADp27vf6rcMG1Ye1R4L3TOFB1ZAQ1qzc5q~R2usZseaZt-cMnxLvivxPa7qw5fOMC3IDTEypd82X-1sFWA2pOuhRknVYNiEthp6yw4EeQ58IsZDP6XNVOdFr-LDKim6YSEhMuJvRurpDLrxPIkU-6BFJOlDbZQ__" alt="" className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col w-4/5 h-full'>
              <div className='flex items-center justify-between w-full gap-5 mb-1'>
                <span className='text-3xl font-bold'>Frontend Web Developer</span>
                <span className='text-xl font-bold'>01/01/2025</span>
              </div>
              <p className='text-lg font-semibold'>ACTUANDO SAS</p>
              <p className='font-semibold'>BOGOTA DC</p>
              <div className='flex flex-col justify-between h-full'>
                <p className='my-5 pr-12 h-[110px] overflow-y-auto'>Término fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.Término fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.jo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, DoctoradoTérmino fijo Salario a convenir, 4 años de experiencia, Profesional, Especialización/ Maestría, Doctorado.Término fijo Salario a convenir, 4 años de experiencia, Profesional.</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-center gap-2'>
                    <span className='italic font-semibold'>Postulados:</span>
                    <span className='px-3 py-1 text-xl italic font-bold bg-white border border-primary rounded-xl'>100</span>
                  </div>
                  <div className='flex items-center justify-center gap-2'>
                    <span className='italic font-semibold'>Salario:</span>
                    <span className='px-3 py-1 text-xl italic font-bold bg-white border border-primary rounded-xl'>$ 1.000.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter className='p-6'>
            <button className='flex items-center justify-center w-full gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-md bg-primary hover:brightness-110'>
              <div className='text-2xl'>
                <FaPencil />
              </div>
              Editar oferta
            </button>
            <button className='flex items-center justify-center w-full gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-md bg-primary hover:brightness-110'>
              <div className='text-2xl'>
                <IoPaperPlane />
              </div>
              Visualizar candidatos
            </button>
            <DrawerClose asChild>
              <button className='flex items-center justify-center w-full gap-2 px-8 py-3 font-semibold transition-all duration-300 border rounded-md bg-background border-primary hover:bg-gray-100'>
                Cancelar
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
