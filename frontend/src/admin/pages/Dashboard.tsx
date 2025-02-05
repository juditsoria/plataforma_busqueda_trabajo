import { DoughnutChart } from '@/admin/plugins/DoughnutChart'
import { PieChart } from '@/admin/plugins/PieChart'
import { PolarChart } from '@/admin/plugins/PolarChart'

export function Dashboard () {
  return (
    <>
      <div className='border-b-2 border-primary'>
        <label className='text-md font-semibold'>Dashboard</label>
      </div>

      <div className='grid grid-cols-2 gap-4 py-4'>
        <div className='col-start-1 col-end-1 flex justify-center items-center'>
          <PolarChart />
        </div>
        <div className='col-start-2 col-end-2 flex justify-center items-center'>
          <DoughnutChart />
        </div>
        <div className='col-start-1 col-end-1 flex justify-center items-center'>
          <PieChart />
        </div>
      </div>
    </>
  )
}
