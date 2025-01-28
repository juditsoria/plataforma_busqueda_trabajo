import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layout/MainLayout'
import HomePageRecruiter from '@/recruiter/pages/HomePageRecruiter'
import { Toaster } from './components/ui/toaster'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        </Route>
        <Route path="/recruiter/home" element={<HomePageRecruiter />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
