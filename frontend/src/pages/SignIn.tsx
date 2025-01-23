import { FormSignIn } from '@components/FormSignIn'
import { Button } from '@components/ui/button'
import { Link } from 'react-router-dom'

export function SignIn () {
  return (
    <main className='h-screen w-full flex justify-between'>
      <section className='bg-secondary w-3/6 flex flex-col items-center py-12'>
        <Link to="/">
          <img src="/logo.webp" alt="Logo ReclutaLent" className='w-[130px] object-contain'/>
        </Link>
        <img src="/sign-in.webp" alt="Iniciar Sesión" className='w-2/4 object-contain mt-14'/>
        <Link to="/sign-up">
          <Button size={'lg'} variant={'default'}>Registrarse</Button>
        </Link>
      </section>
      <section className='bg-gradient-to-r from-accent to-[#bebeb5] w-3/6 flex justify-center items-center'>
        <div className='w-3/5'>
          <FormSignIn />
        </div>
      </section>
    </main>
  )
}
