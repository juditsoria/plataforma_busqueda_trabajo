import { Button } from '@components/ui/button'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { PopoverComponent } from '@components/ui/popover';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Cross1Icon  } from '@radix-ui/react-icons';
import navigation from './navigation.json'

export function Header () {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useLocation()

  const navItems = [
    { path: "/sign-in", label: "Iniciar Sesión" },
    { path: "/sign-up", label: "Registrarse" },
  ];

  const sidebarEventClick = () => {
    setMenuOpen(!menuOpen);
    // alert(`Menu toggled: ${!menuOpen}`); 
  };

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
    <>
      <header className="fixed p-4 top-0 left-0 right-0 bg-secondary border-b-2 border-accent z-30">
        <div className="mx-0 xl:mx-52 flex items-center justify-between">
          <div className="md:hidden block">
            <button onClick={sidebarEventClick} className='flex items-center justify-center'>
            {menuOpen ? (
                  <Cross1Icon className="mr-2 w-6 h-6" />
                ) : (
                  <HamburgerMenuIcon className="mr-2 w-6 h-6" />
                )}
                
            </button>
          </div>
          <Link to="/">
            <img src="/logo.webp" alt="Logo ReclutaLent" className='w-[120px] object-contain'/>
          </Link>
          <nav className="hidden md:flex items-center justify-center gap-4">
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
          </nav>

          <PopoverComponent

          className="md:hidden block"
          trigger={<Button variant="outline" size="sm">Empezar</Button>}
          content={
            <nav>
              <ul className="list-none space-y-2 w-40">
                {navItems.map((item) => (
                  <li key={item.path} className="hover:bg-primary hover:text-primary-foreground">
                    <Link to={item.path}>
                      <p>{item.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          }/>
        </div>
      </header>
      <div className={`absolute top-[64px] left-0 right-0 bottom-0 z-20 transition-transform duration-300 ${
        menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="h-full bg-secondary p-6">
            {/* Contenido del sidebar */}
          </div>
      </div>
    </>
  )
}
