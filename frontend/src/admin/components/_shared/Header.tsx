import { Button } from '@components/ui/button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'

export function Header () {
  const [menuOpen, setMenuOpen] = useState(false)

  const sidebarEventClick = () => {
    setMenuOpen(!menuOpen)
    // alert(`Menu toggled: ${!menuOpen}`);
  }

  return (
    <>
      <header className="py-4 bg-secondary border-b-2 border-accent z-30">
        <div className="mx-16 flex items-center justify-between">
          <div className="md:hidden block">
            <button onClick={sidebarEventClick} className="flex items-center justify-center">
              {menuOpen ? (
                <Cross1Icon className="mr-2 w-6 h-6" />
              ) : (
                <HamburgerMenuIcon className="mr-2 w-6 h-6" />
              )}
            </button>
          </div>
          <Link to="/">
            <img
              src="/logo.webp"
              alt="Logo ReclutaLent"
              className="w-[120px] object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center justify-center gap-4">
            <ul className="list-none flex gap-4">
              <li>
                <Link to="/">
                  <Button variant={'outline'} className="">
                    Cerrar Sesión
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>
    </>
  )
}
