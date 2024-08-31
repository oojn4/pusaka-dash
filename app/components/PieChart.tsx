// PieChart.tsx

import { ArcElement, Chart as ChartJS, ChartOptions, Legend, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface PieChartProps {
    labels: string[];
    datasetLabel: string;
    data: number[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, datasetLabel, data }) => {
    // Ensure data is valid
    if (!Array.isArray(data) || !Array.isArray(labels) || typeof datasetLabel !== 'string') {
        console.error('Invalid props passed to PieChart');
        return null;
    }

    // Data and configuration for the pie chart
    const chartData = {
        labels: labels,
        datasets: [{
            label: datasetLabel,
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ].slice(0, data.length), // Ensure backgroundColor array matches the data length
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ].slice(0, data.length), // Ensure borderColor array matches the data length
            borderWidth: 1
        }]
    };

    // Define the options with the correct type
    const options: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const dataset = tooltipItem.dataset;
                        const label = dataset.label || '';
                        const value = dataset.data[tooltipItem.dataIndex];
                        return `${label}: ${value}`;
                    }
                }
            }
        },
        interaction: {
            mode: 'nearest', // Use valid mode string
            intersect: true,
        },
        hover: {
            mode: 'nearest', // Use valid mode string
            intersect: true
        }
    };

    return (
        <div>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
