import useLocalStorage from '@/hooks/useLocalStorage'
import Main from '../components/_shared/main/Main'
import Profile from '../components/_shared/profile/Profile'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const { storedValue } = useLocalStorage<{ email: string, role: string } | null>('user', null)
  const navigate = useNavigate()

  useEffect(() => {
    if (storedValue?.role === 'admin') navigate('/admin')
    else if (storedValue?.role === 'recruiter') navigate('/recruiter/home')
  }, [storedValue?.role])

  return (
    <main className='max-w-[1400px] mx-auto mt-24 px-4 flex gap-6'>
      <Profile />
      <Main />
    </main>
  )
}

export default Home
