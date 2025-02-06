import { Link, useLocation } from 'react-router-dom'

export function NavBar () {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path ? 'bg-primary text-white' : 'hover:bg-[#B2B76F] hover:text-white'

  return (
    <aside className="bg-secondary w-full rounded-lg overflow-hidden">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin"
              className={`block p-3 rounded-lg ${isActive('/admin')}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/candidatos"
              className={`block p-3 rounded-lg ${isActive('/admin/candidatos')}`}
            >
              Candidatos
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reclutadores"
              className={`block p-3 rounded-lg ${isActive('/admin/reclutadores')}`}
            >
              Reclutadores
            </Link>
          </li>
          <li>
            <Link
              to="/admin/ofertas"
              className={`block p-3 rounded-lg ${isActive('/admin/ofertas')}`}
            >
              Ofertas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
