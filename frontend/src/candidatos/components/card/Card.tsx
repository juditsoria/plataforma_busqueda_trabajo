import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface Props {
  id: number
  titulo: string
  salario: number
  ubicacion: string
  details?: boolean
  description?: string
  fechaPublicacion?: string
}

const Card = ({ id, titulo, salario, ubicacion, details = true, description, fechaPublicacion }: Props) => {
  return (
    <div>
      <div className='mt-5 flex items-center gap-5 bg-secondary p-3 rounded-lg relative'>
        <img src="https://picsum.photos/200" className="w-[100px] h-[85px] object-cover rounded-sm" />
        <div className="flex flex-col">
          <h3 className='text-lg'>{ titulo }</h3>
          <h5 className='text-lg'><span className='font-semibold'>Salario:</span> { salario }</h5>
          <h5 className='text-lg'><span className='font-semibold'>Ubicación:</span> { ubicacion } </h5>
        </div>
        {
          details &&
          <div className='flex items-center flex-col w-40 gap-2 absolute right-3'>
          <Link className='w-full' to={`/empleo/${id}`}>
            <Button variant='outline' className='w-full'>Ver mas</Button>
          </Link>
          <Link className='w-full' to={`/empleo/${id}/aplicar`}>
            <Button className='w-full'>Aplicar Ahora</Button>
          </Link>
        </div>
        }
      </div>
      {
          description &&
        <div className='bg-secondary rounded-lg mt-5 p-3'>
            <div className='flex items-center justify-between mb-2 font-bold'>
              <h2>Acerca del empleo</h2>
              { fechaPublicacion && <span>{ fechaPublicacion }</span> }
            </div>
              {description}
          </div>
        }
    </div>
  )
}

export default Card
