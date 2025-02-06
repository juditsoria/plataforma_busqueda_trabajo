import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'

export function Reclutadores () {
  return (
    <>
      <div className='border-b-2 border-primary mb-4'>
        <label className='text-xl font-semibold'>Reclutadores</label>
      </div>
      <div className="flex w-full items-center space-x-2 mb-4">
        <Input className='bg-secondary' type="text" placeholder="Reclutadores" />
        <Button type="submit"><CiSearch /></Button>
      </div>
    </>
  )
}
