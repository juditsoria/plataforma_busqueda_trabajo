import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { CiFilter } from 'react-icons/ci'

const Filter = () => {
  return (
    <div className="flex items-center gap-3 pb-3">
      <Button>
        <CiFilter size={30} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant='secondary'>Fecha de publicación</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-secondary'>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem className='cursor-pointer'>Mes Pasado</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Semana Pasada</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Ultimas 24h</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant='secondary'>Años de experiencia</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-secondary'>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem className='cursor-pointer'>Mes Pasado</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Semana Pasada</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Ultimas 24h</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant='secondary'>En remoto</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-secondary'>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem className='cursor-pointer'>Mes Pasado</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Semana Pasada</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Ultimas 24h</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Filter
