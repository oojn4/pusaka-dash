import { Chart, ChartOptions, registerables, TooltipItem } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import React, { useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';

// Register chart components and plugins
Chart.register(...registerables, annotationPlugin);
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
  DanaDesa: number;
  DanaDesaPerKapita:number;
};
interface QuadrantAnalysis1Props {
  data: DataItem[];  // Must match the parent
}


const QuadrantAnalysis1: React.FC<QuadrantAnalysis1Props> = ({ data }) => {
  // Extract data points
  useEffect(() => {
    console.log(data)
  }, []);
  const points = data.map(point => ({
    x: point.IKP2023,
    y: point.DanaDesaPerKapita,
    ...point,
  }));
  useEffect(() => {
    console.log(points)
  }, []);
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
            xMin: 59,
            xMax: 59,
            borderColor: 'red',
            borderWidth: 2,
          },
          // Horizontal Line
          horizontalLine: {
            type: 'line',
            yMin: 356,
            yMax: 356,
            borderColor: 'blue',
            borderWidth: 2,
          },
          // Quadrant Labels
          quadrantI: {
            type: 'label',
            xValue: 70,
            yValue: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: 0,
            yAdjust: 0,
            content: 'Kuadran I',
          },
          quadrantII: {
            type: 'label',
            xValue: 50,
            yValue: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: 0,
            yAdjust: 0,
            content: 'Kuadran II',
          },
          quadrantIII: {
            type: 'label',
            xValue: 50,
            yValue: 200,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: 0,
            yAdjust: 0,
            content: 'Kuadran III',
          },
          quadrantIV: {
            type: 'label',
            xValue: 70,
            yValue: 200,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
            color: 'white',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: 6,
            xAdjust: 0,
            yAdjust: 0,
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
          text: 'IKP',  // Add your Y axis label here
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
          text: "Dana Desa Perkapita",  // Add your Y axis label here
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
