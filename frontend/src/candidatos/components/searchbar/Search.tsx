import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div className="flex w-full items-center space-x-2 p-5">
      <Input className='bg-secondary' type="text" placeholder="Buscar Empleo" />
      <Button type="submit"><CiSearch /></Button>
    </div>
  )
}

export default Search
