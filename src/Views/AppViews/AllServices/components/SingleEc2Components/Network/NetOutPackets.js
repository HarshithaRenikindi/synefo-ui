import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const OutPackets = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50'];

  // Data for the CPU utilization chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Sent',
      data: [240, 240, 226, 230, 238, 245, 238, 255, 267, 262, 231, 240],  // Sample CPU utilization data
      fill: false,
      borderColor: 'rgb(250, 162, 75)',  // Color for CPU utilization line
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
        max: 400,           // End at 100 (percentage)
        ticks: {
          stepSize: 100,     // Increments of 25
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
    <div style={{ width: '80%', height: '400px', margin: '0 auto' }}> {/* Set the size of the container */}
      <h2>Net_OutPackets</h2>
      <p>Number of sent packets</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default OutPackets;
