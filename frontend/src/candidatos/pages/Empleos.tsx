import Main from '../components/_shared/main/Main'
import Profile from '../components/_shared/profile/Profile'
import Search from '../components/searchbar/Search'

const Empleos = () => {
  return (
    <div className='max-w-[1400px] mx-auto mt-24 px-4 flex gap-6'>
      <Profile />
      <Main>
        <Search/>
      </Main>
    </div>
  )
}

export default Empleos
