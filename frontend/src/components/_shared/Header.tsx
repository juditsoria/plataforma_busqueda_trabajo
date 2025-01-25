import { Button } from '@components/ui/button'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header className="fixed p-4 top-0 left-0 right-0 bg-secondary border-b-2 border-accent">
      <div className="mx-0 sm:mx-52 flex items-center justify-between">
        <div>
        <Link to="/sign-up">
                <Button>Registrarse</Button>
              </Link>
        </div>
        <Link to="/">
          <img src="/logo.webp" alt="Logo ReclutaLent" className='w-[120px] object-contain'/>
        </Link>
        <nav className="hidden sm:flex items-center justify-center gap-4">
          <ul className='list-none flex gap-4'>
            <li>
              <Link to="/sign-in">
                <Button variant={'outline'} className=''>Iniciar Sesión</Button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <Button>Registrarse</Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* ahora necesito provarlo aca popover  */}
      </div>
    </header>
  )
}
