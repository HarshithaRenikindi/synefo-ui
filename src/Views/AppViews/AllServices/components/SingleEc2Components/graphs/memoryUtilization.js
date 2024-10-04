import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Memoryutilization = () => {
  // Generate the labels for the X-axis (e.g., time or days)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00','01:10', '01:20', '01:30', '01:40', '01:50'];

  // Data for the Memory utilization chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Memory Utilization',
      data: [25, 40, 35, 55, 50, 60, 75, 62, 53, 86, 74, 63],  // Sample memory utilization data
      fill: false,
      borderColor: 'rgb(250, 98, 152)',  // Color for Memory utilization
      borderWidth: 5, // Increased line thickness
      tension: 0.5,
      pointRadius: 0, // Adjust point size if needed
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
          stepSize: 25,     // Increments of 20
        },
      },
    },
  };

  return (
    <div className='py-2 px-4'> {/* Set the size of the container */}
      <h2>Memory Utilization Over Time</h2>
      <p>Monitor the memory usage of the instance</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default Memoryutilization;
