import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export function DoughnutChart () {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        borderColor: 'rgb(143, 151, 30)',
        backgroundColor: [
          'rgba(143, 151, 30, 0.2)',
          'rgba(143, 151, 30, 0.2)',
          'rgba(143, 151, 30, 0.2)'
        ]
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Doughnut Chart Example'
      }
    }
  }

  return <Doughnut data={data} options={options} />
}
