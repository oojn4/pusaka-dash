import { Chart, ChartOptions, registerables, TooltipItem } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import React from 'react';
import { Scatter } from 'react-chartjs-2';

// Register chart components and plugins
Chart.register(...registerables, annotationPlugin);

// Define a type for your data points
interface DataPoint {
  x: number;
  y: number;
  label: string;
  kabupaten_kota:string;
}

const QuadrantAnalysis: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  // Extract data points
  const points = data.map(point => ({
    x: point.x,
    y: point.y,
    label: point.label,
    kabupaten_kota: point.kabupaten_kota
  }));

  // Define the data and options for the scatter plot
  const scatterData = {
    datasets: [
      {
        label: 'Quadrant Data',
        data: points,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  // Define scatter chart options with proper typings
  const scatterOptions: ChartOptions<'scatter'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'scatter'>) => {
            // Assert the type of raw to DataPoint
            const dataPoint = tooltipItem.raw as DataPoint;
            const label = dataPoint.label;
            const kabkot = dataPoint.kabupaten_kota;
            return [
              `Industri: ${label}`,
              `Kabupaten/Kota: ${kabkot}`
            ];
          },
        },
      },
      annotation: {
        annotations: {
          // Vertical Line
          verticalLine: {
            type: 'line',
            xMin: -21.36,
            xMax: -21.36,
            borderColor: 'red',
            borderWidth: 2,
          },
          // Horizontal Line
          horizontalLine: {
            type: 'line',
            yMin: 0.2257,
            yMax: 0.2257,
            borderColor: 'blue',
            borderWidth: 2,
          },
          // Quadrant Labels
          quadrantI: {
            type: 'label',
            xValue: -21.36+2,
            yValue: 0.2257+0.25,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: 10,
            yAdjust: -10,
            content: 'Kuadran I: Zona Optimum',
          },
          quadrantII: {
            type: 'label',
            xValue: -21.36-2+1,
            yValue: 0.2257+0.25,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: -10,
            yAdjust: -10,
            content: 'Kuadran II: Zona Padat',
          },
          quadrantIII: {
            type: 'label',
            xValue: -21.36-2+1,
            yValue: 0.2257-0.25,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: -10,
            yAdjust: 10,
            content: 'Kuadran IV: Zona Terisolasi',
          },
          quadrantIV: {
            type: 'label',
            xValue: -21.36+2,
            yValue: 0.2257-0.25,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: 10,
            yAdjust: 10,
            content: 'Kuadran III: Zona Terbatas',
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Konektivitas (menit/ 10 Km)',  // Add your Y axis label here
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        title: {
          display: true,
          text: "Aksesibilitas (Km/ Km²)",  // Add your Y axis label here
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div>
      <Scatter data={scatterData} options={scatterOptions} />
    </div>
  );
};

export default QuadrantAnalysis;
