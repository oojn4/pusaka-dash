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
}

const QuadrantAnalysis: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  // Extract data points
  const points = data.map(point => ({
    x: point.x,
    y: point.y,
    label: point.label
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
            return label ? `Label: ${label}` : '';
          },
        },
      },
      annotation: {
        annotations: {
          // Vertical Line
          verticalLine: {
            type: 'line',
            xMin: 0,
            xMax: 0,
            borderColor: 'red',
            borderWidth: 2,
          },
          // Horizontal Line
          horizontalLine: {
            type: 'line',
            yMin: 0,
            yMax: 0,
            borderColor: 'blue',
            borderWidth: 2,
          },
          // Quadrant Labels
          quadrantI: {
            type: 'label',
            xValue: 5,
            yValue: 5,
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
            content: 'Quadrant I',
          },
          quadrantII: {
            type: 'label',
            xValue: -5,
            yValue: 5,
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
            content: 'Quadrant II',
          },
          quadrantIII: {
            type: 'label',
            xValue: -5,
            yValue: -5,
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
            content: 'Quadrant III',
          },
          quadrantIV: {
            type: 'label',
            xValue: 5,
            yValue: -5,
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
            content: 'Quadrant IV',
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
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
      <h2 style={{"color":"white"}}>Analisis Kuadran</h2>
      <Scatter data={scatterData} options={scatterOptions} />
    </div>
  );
};

export default QuadrantAnalysis;