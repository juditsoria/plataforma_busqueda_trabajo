import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layout/MainLayout'
import { SignIn } from '@pages/SignIn'
import { Toaster } from '@components/ui/toaster'

import { AdminLayout } from '@/admin/layout/AdminLayout'
import { Dashboard } from '@/admin/pages/Dashboard'
import { Candidatos } from '@/admin/pages/Candidatos'
import { Reclutadores } from '@/admin/pages/Reclutadores'
import { Ofertas } from '@/admin/pages/Ofertas'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="candidatos" element={<Candidatos />} />
          <Route path="reclutadores" element={<Reclutadores />} />
          <Route path="ofertas" element={<Ofertas />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
