import { Chart, ChartOptions, registerables, TooltipItem } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import React from 'react';
import { Scatter } from 'react-chartjs-2';

// Register chart components and plugins
Chart.register(...registerables, annotationPlugin);

// Define a type for your data points
type DataItem = {
  AksesAirBersih: number;
  AngkaHarapanHidup: number;
  Elevation: number;
  IKP2023: number;
  JumlahPenduduk: number;
  Kabkot: string;        // Kabupaten/Kota
  Kecamatan: string;     // District/Sub-district
  Kelurahan: string;     // Village/Area
  NDBI: number;
  NDDI: number;
  NDVI: number;
  NDWI: number;
  NTL: number;
  PopulationDensity: number;
  RWI: number;
  Rasio: number;
  RataRataLamaSekolahKel: number;
  SAVI: number;
  Slope: number;
  SoilMoisture: number;
  Stunting: number;
};


const QuadrantAnalysis1: React.FC<{ data: DataItem[] }> = ({ data }) => {
  // Extract data points
  const points = data.map(point => ({
    x: point.IKP2023,
    y: point.Stunting,
    Kabkot: point.Kabkot,
    Kecamatan: point.Kecamatan
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
            const dataPoint = tooltipItem.raw as DataItem;
            const Kabkot = dataPoint.Kabkot;
            const Kecamatan = dataPoint.Kecamatan;
            return [
              `Kabupaten/Kota: ${Kabkot}`,
              `Kecamatan: ${Kecamatan}`
            ];
          },
        },
      },
      annotation: {
        annotations: {
          // Vertical Line
          verticalLine: {
            type: 'line',
            xMin: 65,
            xMax: 65,
            borderColor: 'red',
            borderWidth: 2,
          },
          // Horizontal Line
          horizontalLine: {
            type: 'line',
            yMin: 0.013,
            yMax: 0.013,
            borderColor: 'blue',
            borderWidth: 2,
          },
          // Quadrant Labels
          quadrantI: {
            type: 'label',
            xValue: 70,
            yValue: 1,
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
            content: 'Kuadran I',
          },
          quadrantII: {
            type: 'label',
            xValue: 50,
            yValue: 1,
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
            content: 'Kuadran II',
          },
          quadrantIII: {
            type: 'label',
            xValue: 50,
            yValue: -0.15,
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
            content: 'Kuadran III',
          },
          quadrantIV: {
            type: 'label',
            xValue: 70,
            yValue: -0.15,
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
            content: 'Kuadran IV',
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
          text: 'GTFP',  // Add your Y axis label here
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
          text: "Dana Lingkungan Hidup",  // Add your Y axis label here
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

export default QuadrantAnalysis1;
