import { DoughnutChart } from '@/admin/plugins/DoughnutChart'
import { PieChart } from '@/admin/plugins/PieChart'
import { PolarChart } from '@/admin/plugins/PolarChart'

export function Dashboard () {
  return (
    <>
      <div className='border-b-2 border-primary'>
        <label className='text-md font-semibold'>Dashboard</label>
      </div>
      <div className='flex'>
        <PolarChart />
        <DoughnutChart />
      </div>
      <div>
        <PieChart />
      </div>
    </>
  )
}
