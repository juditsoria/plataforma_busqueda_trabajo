import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layout/MainLayout'
import HomePageRecruiter from '@/recruiter/pages/HomePageRecruiter'
import { SignIn } from '@pages/SignIn'
import { Toaster } from '@components/ui/toaster'
import CandidatesOfferRecruiter from '@/recruiter/pages/CandidatesOfferRecruiter'
import CandidateRecruiter from './recruiter/pages/CandidateRecruiter'
import Home from './candidatos/pages/Home'
import Empleos from './candidatos/pages/Empleos'
import EmpleosDetails from './candidatos/pages/EmpleosDetails'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/empleos' element={<Empleos />} />
          <Route path='/empleo/:empleoId' element={<EmpleosDetails />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/recruiter/home" element={<HomePageRecruiter />} />
        <Route path="/recruiter/offer/:offerId" element={<CandidatesOfferRecruiter />} />
        <Route path="/recruiter/candidate/:candidateId" element={<CandidateRecruiter />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
