import { Button } from '@/components/ui/button'
import profile from './profile.json'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='flex justify-between flex-col gap-4 border-b-2 border-solid border-gray-200 max-w-[300px] max-h-max bg-accent rounded-xl p-5 drop-shadow-xl'>
      <div className='flex items-center gap-4'>
        <img src={profile.avatar} alt="Avatar" className='w-[75px] h-[76px] object-cover rounded-full' />
        <div>
          <h3>{profile.name}</h3>
          <span>{ profile.email }</span>
        </div>
      </div>
      <p>{profile.description}</p>
      <div className='flex flex-col gap-4'>
        <Link to='/profile'>
          <Button className='w-full'>Ver Perfil</Button>
        </Link>
        <Link to='/cv'>
          <Button className='w-full' variant={'secondary'}>Subir CV</Button>
        </Link>
        <Link to='/postulaciones'>
          <Button className='w-full'>Ver mis postulaciones</Button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
