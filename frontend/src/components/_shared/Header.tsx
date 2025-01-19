import { Button } from '../ui/button'

export function Header () {
  return (
    <header className="fixed p-5  top-0 left-0 right-0 bg-slate-400">
      <div className="mx-96 flex items-center justify-between ">
        <h1>ReclutaLent</h1>
        <div className="flex items-center justify-center gap-4">
          <Button>Inicio</Button>
          <Button>Empleos</Button>
          <Button>Registrarse</Button>
        </div>
      </div>
    </header>
  )
}
