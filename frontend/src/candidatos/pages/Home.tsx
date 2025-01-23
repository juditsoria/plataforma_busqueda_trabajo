import Main from '../components/_shared/main/Main'
import Profile from '../components/_shared/profile/Profile'

const Home = () => {
  return (
    <main className='max-w-[1400px] mx-auto mt-24 px-4 flex gap-6'>
      <Profile />
      <Main />
    </main>
  )
}

export default Home
