import { Button } from '@components/ui/button'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import api from '@/lib/api'

export function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const sidebarEventClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLogout = async () => {
    try {
      await api.post('/logout/')

      localStorage.removeItem('token')

      navigate('/')
    } catch (error) {
      console.error('Error al cerrar sesión', error)
    }
  }

  return (
    <>
      <header className="py-4 bg-accent border-b-2 border-accent z-30">
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
                <Button variant={'outline'} onClick={handleLogout}>
                  Cerrar Sesión
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
