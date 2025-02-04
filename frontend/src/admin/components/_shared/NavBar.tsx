import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <aside className="bg-secondary w-full rounded-lg overflow-hidden">

      <div className='py-1 mb-2 bg-accent rounded-inherit'>

      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/admin" className="block p-3 rounded-lg hover:bg-primary hover:text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/candidatos" className="block p-3 rounded-lg hover:bg-primary hover:text-white">
              Candidatos
            </Link>
          </li>
          <li>
            <Link to="/admin/reclutadores" className="block p-3 rounded-lg hover:bg-primary hover:text-white">
              Reclutadores
            </Link>
          </li>
          <li>
            <Link to="/admin/ofertas" className="block p-3 rounded-lg hover:bg-primary hover:text-white">
              Ofertas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
