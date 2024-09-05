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
  tahun?: number[];
  provinsi?: string[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, data, title, tahun, provinsi }) => {
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
          label: function (tooltipItem:any) {
            const label = labels[tooltipItem.dataIndex];
            const prov = provinsi? provinsi[tooltipItem.dataIndex]:'';
            return [
              label? prov?`${prov}`: '':`${label}`
            ];
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
