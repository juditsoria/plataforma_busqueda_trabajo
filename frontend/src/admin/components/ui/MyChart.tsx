import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Registrar los componentes necesarios de Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Definir los tipos de los datos y opciones para el gráfico
interface ChartData {
  labels: string[]
  datasets: Array<{
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string
  }>
}

interface ChartOptions {
  responsive: boolean
  plugins: {
    legend: {
      position: 'top' | 'left' | 'right' | 'bottom' | 'center' | 'chartArea' // Asegúrate de usar uno de los valores permitidos
    }
    title: {
      display: boolean
      text: string
    }
  }
}

export function MyChart () {
  // Datos para el gráfico
  const data: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgb(143, 151, 30)',
        backgroundColor: 'rgba(143, 151, 30, 0.2)'
      }
    ]
  }

  // Opciones para el gráfico
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart Example'
      }
    }
  }

  return <Bar data={data} options={options} />
}
