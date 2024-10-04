import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CPUSys = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50'];

  // Data for the CPU utilization chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'CPU Kernel time',
      data: [60, 58, 38, 60, 40, 65, 30, 75, 58, 72, 58, 60],  // Sample CPU utilization data
      fill: false,
      borderColor: 'rgb(134, 118, 255)',  // Color for CPU utilization line
      borderWidth: 5, // Increased line thickness
      tension: 0.0,
      pointRadius: 0, // Remove points
    }]
  };

  // Configuration options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,             // Start at 0
        max: 100,           // End at 100 (percentage)
        ticks: {
          stepSize: 25,     // Increments of 25
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,     // Disable tooltips (numbers at points)
      },
    },
  };

  return (
    <div className='py-2 px-4'> 
      <h2>CPU_Sys</h2>
      <p>Total system cpu kernel time</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default CPUSys;
