import { Link, useLocation } from 'react-router-dom'

export function NavBar () {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path ? 'bg-primary text-white' : ''

  return (
    <aside className="bg-secondary w-full rounded-lg overflow-hidden">
      <div className='py-1 mb-2 bg-accent rounded-inherit'>
        {/* Aquí puedes agregar más contenido si lo necesitas */}
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin"
              className={`block p-3 rounded-lg hover:bg-[rgba(143, 151, 30, 17)] hover:text-white ${isActive('/admin')}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/candidatos"
              className={`block p-3 rounded-lg hover:bg-[rgba(143, 151, 30, 17)] hover:text-white ${isActive('/admin/candidatos')}`}
            >
              Candidatos
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reclutadores"
              className={`block p-3 rounded-lg hover:bg-[rgba(143, 151, 30, 17)] hover:text-white ${isActive('/admin/reclutadores')}`}
            >
              Reclutadores
            </Link>
          </li>
          <li>
            <Link
              to="/admin/ofertas"
              className={`block p-3 rounded-lg hover:bg-[rgba(143, 151, 30, 17)] hover:text-white ${isActive('/admin/ofertas')}`}
            >
              Ofertas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
