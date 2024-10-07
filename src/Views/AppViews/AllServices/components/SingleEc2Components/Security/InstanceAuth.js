import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const InstanceAuthentication = () => {
  // Generate the labels for the X-axis (e.g., months)
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Data for the chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Score',
      data: [5, 9, 8, 6, 3, 4, 5, 6, 5, 3, 4, 8],  // Sample data for each month
      fill: false,
      borderColor: 'rgb(134, 118, 255)',
      borderWidth: 5, // Increased line thickness
      tension: 0.5,
      pointRadius: 0, // Adjust point size if needed
    }]
  };

  // Configuration options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,  // Optional: Set this to true if you want to start from 0
        min: 0,             // Start at 25
        max: 15,            // End at 100
        ticks: {
          stepSize: 5,      // Increments of 25 (25, 50, 75, 100)
        },
      },
    },
  };

  return (
    <div className=' bg-white px-4 py-2'> {/* Set the size of the container */}
      <h2>Instance Authentication Failures</h2>
      <p>Authentication Failure Log for EC2 Instance-4567</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default InstanceAuthentication;
