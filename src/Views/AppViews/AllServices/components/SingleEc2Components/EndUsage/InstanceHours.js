import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const InstanceHours = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['12:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'];

  // Data for the CPU utilization chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Total Running Instance hours',
      data: [10, 15, 11, 7, 10, 15, 13, 7, 13, 11, 7, 14],  // Sample CPU utilization data
      fill: false,
      borderColor: 'rgb(136, 225, 67)',  // Color for CPU utilization line
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
        max: 20,           // End at 100 (percentage)
        ticks: {
          stepSize: 5,     // Increments of 25
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
    <div className='w-full bg-white py-2 px-4 rounded-md '> {/* Set the size of the container */}
      <h2>Instance Hours (Running)</h2>
      <p>Total Instance Hours (Running) Over the Last month</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default InstanceHours;
