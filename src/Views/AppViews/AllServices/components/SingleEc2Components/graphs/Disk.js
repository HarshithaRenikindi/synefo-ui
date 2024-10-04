import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Diskio = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50'];

  // Data for the Disk I/O utilization chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Read',
        data: [45, 60, 50, 45, 56, 40, 55, 45, 60, 58, 62, 65],  // Sample disk read data
        fill: false,
        borderColor: 'rgb(161, 69, 255)',  // Color for Disk Read utilization
        borderWidth: 3, // Increased line thickness
        tension: 0.5,
        pointRadius: 0, // Remove points
      },
      {
        label: 'Write',
        data: [30, 50, 40, 60, 55, 50, 45, 56, 40, 46, 52, 55],  // Sample disk write data
        fill: false,
        borderColor: 'rgb(255, 142, 62)',  // Color for Disk Write utilization (red)
        borderWidth: 3, // Increased line thickness
        tension: 0.5,
        pointRadius: 0, // Remove points
      }
    ]
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
        enabled: false,     // Disable tooltips
      },
    },
  };

  return (
    <div className='py-2 px-4'> {/* Set the size of the container */}
      <h2>Disk I/O (MB/s)</h2>
      <p>Monitor read and write operations on the instance's disks</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default Diskio;
