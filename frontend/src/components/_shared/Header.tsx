import { Button } from '@components/ui/button'
import { Link, useLocation } from 'react-router-dom'
import navigation from './navigation.json'

export function Header () {
  const navigate = useLocation()

  const getRol = () => {
    const role = localStorage.getItem('role')

    switch (role) {
      case 'admin':
        return 'admin'
      case 'candidato':
        return 'candidato'
      case 'reclutador':
        return 'reclutador'
      default:
        return 'user'
    }
  }

  return (
    <header className="fixed py-4 top-0 left-0 right-0 bg-accent z-10">
      <div className="max-w-[1400px] px-4 mx-auto flex items-center justify-between">
        <Link to="/">
          <img src="/logo.webp" alt="Logo ReclutaLent" className='w-[120px] object-contain'/>
        </Link>
        <nav className="flex items-center justify-center gap-4">
          <div className='flex gap-4'>
            {
              getRol() === 'candidato'
                ? <>
                  <Link to='/'>
                    <Button variant={navigate.pathname === '/' ? 'default' : 'secondary'}>Inicio</Button>
                  </Link>
                  <Link to='/empleos'>
                    <Button variant={navigate.pathname === '/empleos' ? 'default' : 'secondary'}>Empleos</Button>
                  </Link>
                </>
                : navigation.map(({ name, path, variant }, inx) => (
                <Link key={inx} to={path}>
                    <Button variant={variant as 'secondary' | 'default' | 'link' | 'destructive' | 'outline' | 'ghost' || 'default'}>{name}</Button>
                </Link>
                ))
            }
          </div>
        </nav>
      </div>
    </header>
  )
}
