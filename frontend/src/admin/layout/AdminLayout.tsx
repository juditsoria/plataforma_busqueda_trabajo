import { Header } from '@/admin/components/_shared/Header'
import { NavBar } from '@/admin/components/_shared/NavBar'
import { Profile } from '@/admin/components/_shared/Profile'
import { Outlet } from 'react-router-dom'

export function AdminLayout () {
  return (
    <>
    <main className='fixed top-0 left-0 right-0'>
      <Header />
      <div className="grid grid-cols-6 gap-4 py-4 mx-0 xl:mx-52">
        <div className="col-start-1 col-end-1">
          <Profile />
        </div>

        <div className="col-span-4 col-start-2">
          <div className='bg-secondary w-full h-screen rounded-lg p-4'>
            <Outlet />
          </div>
        </div>

        <div className="col-span-1 col-end-7">
          <NavBar />
        </div>
      </div>
    </main>
    </>
  )
}
