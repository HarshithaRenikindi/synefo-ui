import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ErrorRate = () => {
  // Generate the labels for the X-axis (e.g., timestamps)
  const labels = ['2023-11-06', '2023-11-07', '2023-11-08', '2023-11-09', '2023-11-10', '2023-11-11', '2023-11-12', '2023-11-13', '2023-11-14', '2023-11-15', '2023-11-16'];

  // Data for the chart (example data)
  const data = {
    labels: labels,
    datasets: [{
      label: 'Rate of Errors',
      data: [0.1, 0.125, 0.35, 0.20, 0.32, 0.35, 0.1, 0.125, 0.35, 0.20, 0.32],  // Sample data for each timestamp
      fill: false,
      borderColor: 'rgb(27, 77, 255)',
      borderWidth: 5,  // Increased line thickness
      tension: 0.5,
      pointRadius: 0,  // Adjust point size if needed
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
                const yAxisValues = [0, 0.1, 0.2, 0.3, 0.4]; // Include 0 for the Y-axis to start at zero
                if (yAxisValues.includes(value)) {
                  return value + '%'; // Append '%' to the displayed value
                }
                return null; // Hide other values
              },
              stepSize: 0.1, // Define the step size if needed (optional)
            },
          },
    },
  };
  

  return (
    <div className='bg-white w-full py-2 px-4 rounded-md '> {/* Set the size of the container */}
      <h2 >Error Rate</h2>
      <p>Measures the rate of errors or failures over a specific time frame</p>
      <Line data={data} options={options}/> {/* Set the size of the Line component */}
    </div>
  );
};

export default ErrorRate;
