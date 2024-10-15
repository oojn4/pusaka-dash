import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  labels: string[];
  data: number[];
  title?: string;
  kecamatan?: string[];
  kabupaten?: string[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, data, title, kecamatan, kabupaten }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false
      },
      title: {
        display: !!title,
        text: title || '',
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (tooltipItem: any) {
            const label = labels[tooltipItem.dataIndex];
            const kab = kabupaten ? kabupaten[tooltipItem.dataIndex] : '';
            const value = data[tooltipItem.dataIndex];
            const kec = kecamatan ? kecamatan[tooltipItem.dataIndex] : '';
          
            let tooltipLabel = `${title}: ${value}`;
            // if (prov) {
            //   tooltipLabel += `, Provinsi: ${prov}`;
            // }
            if (kec) {
              tooltipLabel += `, Desa: ${label}`;
            }
            return tooltipLabel;
          }
        }
      }
    },
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
