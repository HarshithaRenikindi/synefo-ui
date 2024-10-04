import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const NetworkTraffic = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50'];

  // Data for the network traffic chart (with two datasets)
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Inbound Traffic',
        data: [30, 55, 45, 70, 65, 80, 72, 60, 36, 42, 48, 52],  // Sample incoming traffic data
        fill: false,
        borderColor: 'rgb(161, 69, 255)',  // Blue color for incoming traffic
        borderWidth: 5, // Increased line thickness
        tension: 0.5,
        pointRadius: 0, // Adjust point size if needed
      },
      {
        label: 'Outbound Traffic',
        data: [25, 40, 35, 55, 50, 60, 75, 62, 53, 86, 74, 63], // Sample outgoing traffic data
        fill: false,
        borderColor: 'rgb(250, 98, 152)',  // Orange color for outgoing traffic
        borderWidth: 5, // Increased line thickness
        tension: 0.5,
        pointRadius: 0, // Adjust point size if needed
      }
    ]
  };

  // Configuration options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,             // Start at 0
        max: 100,           // End at 400 (adjust based on your data)
        ticks: {
          stepSize: 25,    // Increments of 100
        },
      },
    },
  };

  return (
    <div className='py-2 px-4'> {/* Set the size of the container */}
      <h2>Network Traffic (Mbps)</h2>
      <p>Track inbound and outbound network traffic.</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default NetworkTraffic;
