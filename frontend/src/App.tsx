import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layout/MainLayout'
import HomePageRecruiter from '@/recruiter/pages/HomePageRecruiter'
import { SignIn } from '@pages/SignIn'
import { Toaster } from '@components/ui/toaster'
import CandidatesOfferRecruiter from '@/recruiter/pages/CandidatesOfferRecruiter'
import CandidateRecruiter from './recruiter/pages/CandidateRecruiter'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
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
