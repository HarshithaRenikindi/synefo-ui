import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const InstanceCompliance = () => {
  // Generate the labels for the X-axis (e.g., months)
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Data for the chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Score',
      data: [5, 8, 12, 14, 11, 15, 20, 18, 15, 8, 14, 20],  // Sample data for each month
      fill: false,
      borderColor: 'rgb(255, 112, 139)',
      borderWidth: 5, // Increased line thickness
      tension: 0.5,
      pointRadius: 0, // Adjust point size if needed
    }]
  };

  // Configuration options for the chart
  const options = {
    scales: {
        y: {
            beginAtZero: true, // Start Y axis at zero if desired
            ticks: {
              callback: function(value) {
                // Define the specific values you want to appear on the Y-axis
                const yAxisValues = [0, 5, 10, 15, 20]; // Include 0 for the Y-axis to start at zero
                if (yAxisValues.includes(value)) {
                  return value + '%'; // Append '%' to the displayed value
                }
                
              },
              stepSize: 0.1, // Define the step size if needed (optional)
            },
          },
    },
  };

  return (
    <div className='w-full bg-white py-2 px-4 rounded-md'> {/* Set the size of the container */}
      <h2>Instance Compliance Score</h2>
      <p>Compliance Score for EC2 Instance-4567</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default InstanceCompliance;
