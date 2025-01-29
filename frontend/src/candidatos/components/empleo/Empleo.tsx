import { Button } from '@/components/ui/button'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import Card from '../card/Card'

interface EmpleoProps {
  id: number
  titulo: string
  descripcion: string
  fecha_publicacion: Date
  salario: number
  ubicacion: string
}

const empleos: EmpleoProps[] = [
  {
    id: 0,
    titulo: 'React Junior Web Development',
    descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consectetur fugit rerum nisi animi reiciendis necessitatibus, quia recusandae velit tenetur possimus voluptatem deserunt voluptatum soluta repudiandae numquam, magnam voluptates vel',
    fecha_publicacion: new Date(),
    salario: 5000,
    ubicacion: 'Mexico'
  },
  {
    id: 1,
    titulo: 'Java Developer',
    descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consectetur fugit rerum nisi animi reiciendis necessitatibus, quia recusandae velit tenetur possimus voluptatem deserunt voluptatum soluta repudiandae numquam, magnam voluptates vel',
    fecha_publicacion: new Date(),
    salario: 3000,
    ubicacion: 'GDL'
  },
  {
    id: 2,
    titulo: 'React Junior',
    descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consectetur fugit rerum nisi animi reiciendis necessitatibus, quia recusandae velit tenetur possimus voluptatem deserunt voluptatum soluta repudiandae numquam, magnam voluptates vel',
    fecha_publicacion: new Date(),
    salario: 1000,
    ubicacion: 'Sonora'
  },
  {
    id: 3,
    titulo: 'C# Developer',
    descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consectetur fugit rerum nisi animi reiciendis necessitatibus, quia recusandae velit tenetur possimus voluptatem deserunt voluptatum soluta repudiandae numquam, magnam voluptates vel',
    fecha_publicacion: new Date(),
    salario: 100000,
    ubicacion: 'USD'
  }
]

const Empleo = () => {
  const { empleoId } = useParams()

  const getSingleApplication = (): EmpleoProps => {
    return empleos.find((empleo) => empleo.id === Number(empleoId)) ||
    {
      id: 0,
      titulo: '',
      descripcion: '',
      fecha_publicacion: new Date(),
      salario: 0,
      ubicacion: ''
    }
  }

  const { id, titulo, ubicacion, salario } = getSingleApplication()

  return (
    <>
      <div className='flex justify-between items-center'>
        <Link to='/empleos'>
          <Button variant={'secondary'}>
            <IoIosArrowBack />
            Regresar
          </Button>
        </Link>
        <Button>Aplicar Ahora</Button>
      </div>
      <Card id={id} titulo={titulo} salario={salario} ubicacion={ubicacion} details={false} />
    </>
  )
}

export default Empleo
