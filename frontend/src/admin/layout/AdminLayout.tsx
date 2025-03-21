import { Header } from '@/admin/components/_shared/Header'
import { NavBar } from '@/admin/components/_shared/NavBar'
import { Profile } from '@/admin/components/_shared/Profile'
import { Outlet } from 'react-router-dom'

export function AdminLayout () {
  return (
    <main className="fixed inset-0 flex flex-col h-screen">
      <Header />
      <div className="grid grid-cols-6 gap-4 p-4 mx-16 flex-1 h-0">
        <div className="col-start-1 col-end-1">
          <Profile />
        </div>

        <div className="col-span-4 col-start-2">
          <div className="bg-accent w-full flex-1 h-screen rounded-lg p-4 overflow-y-auto">
            <Outlet />
          </div>
        </div>

        <div className="col-span-1 col-end-7">
          <NavBar />
        </div>
      </div>
    </main>
  )
}
