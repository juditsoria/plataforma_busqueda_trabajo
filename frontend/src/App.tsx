import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layout/MainLayout'
import { SignIn } from '@pages/SignIn'
import { Toaster } from '@components/ui/toaster'
import AdminLayout from "@/admin/layout/AdminLayout";

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin" element={<AdminLayout />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
