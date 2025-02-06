import Main from '../components/_shared/main/Main'
import Profile from '../components/_shared/profile/Profile'
import Empleo from '../components/empleo/Empleo'

const EmpleosDetails = () => {
  return (
    <div className='max-w-[1400px] mx-auto mt-24 px-4 flex gap-6'>
      <Profile />
      <Main>
        <Empleo />
      </Main>
    </div>
  )
}

export default EmpleosDetails
