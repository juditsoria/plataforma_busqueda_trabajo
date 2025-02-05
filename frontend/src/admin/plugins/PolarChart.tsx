import { PolarArea } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  CategoryScale, 
  LinearScale, 
  RadialLinearScale // 🔹 Agregar esto
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, RadialLinearScale); // 🔹 Asegurarse de registrarlo

export function PolarChart() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 10, 5],
        borderColor: 'rgb(143, 151, 30)',
        backgroundColor: 'rgba(143, 151, 30, 0.2)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Polar Area Chart Example'
      }
    }
  };

  return <PolarArea data={data} options={options} />;
}
