import Main from '../components/_shared/main/Main'
import Profile from '../components/_shared/profile/Profile'
import Search from '../components/searchbar/Search'
import Card from '../components/card/Card'

const Empleos = () => {
  return (
    <div className='max-w-[1400px] mx-auto mt-24 px-4 flex gap-6'>
      <Profile />
      <Main>
        <Search />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Main>
    </div>
  )
}

export default Empleos
