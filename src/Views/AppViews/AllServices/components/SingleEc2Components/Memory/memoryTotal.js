import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MemTotal = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50'];

  // Data for the CPU utilization chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Amount of physical RAM',
      data: [98, 88, 87, 80, 90, 85, 80, 95, 88, 92, 98, 90],  // Sample CPU utilization data
      fill: false,
      borderColor: 'rgb(27, 77, 255)',  // Color for CPU utilization line
      borderWidth: 5, // Increased line thickness
      tension: 0.5,
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
    <div className='py-2 px-4'> {/* Set the size of the container */}
      <h2>Mem_Total</h2>
      <p>Total amount of physical RAM</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default MemTotal;
