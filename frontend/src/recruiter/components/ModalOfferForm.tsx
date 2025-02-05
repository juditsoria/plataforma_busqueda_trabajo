import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useState } from 'react'
import { AddOfferForm } from './AddOfferForm'
import { AiFillFileAdd } from 'react-icons/ai'

export const ModalOfferForm = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='w-[30%] bg-primary py-3 px-8 rounded-md text-white flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 font-semibold'>
          <div className='text-2xl'>
            <AiFillFileAdd />
          </div>
          Agregar oferta
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-secondary">
        <DialogHeader className='px-3'>
          <DialogTitle className='text-3xl font-bold'>Agregar <span className='text-primary'>Oferta</span></DialogTitle>
          <DialogDescription>
            Completa todos los campos para agregar una nueva oferta.
          </DialogDescription>
        </DialogHeader>
        <section className='max-h-[75vh] overflow-y-auto px-3'>
          <AddOfferForm />
        </section>
      </DialogContent>
    </Dialog>
  )
}
