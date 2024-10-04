import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const OutboundTransfer = () => {
  // Generate the labels for the X-axis (e.g., time or intervals)
  const labels = ['12:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'];

  // Data for the CPU utilization chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Volume',
      data: [10, 15, 11, 7, 20, 15, 13, 7, 13, 11, 7, 14],  // Sample CPU utilization data
      fill: false,
      borderColor: 'rgb(134, 118, 255)',  // Color for CPU utilization line
      borderWidth: 5, // Increased line thickness
      tension: 0.5,
      pointRadius: 0, // Remove points
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
                  return value + 'GB'; // Append '%' to the displayed value
                }
                return null; // Hide other values
              },
              stepSize: 0.1, // Define the step size if needed (optional)
            },
          },
    },
    }
    


  return (
    <div className='w-full bg-white py-2 px-4 rounded-md '> {/* Set the size of the container */}
      <h2>Network Data Transfer (outbound)</h2>
      <p>Outbound Network Data Transfer Volume Over the Last months</p>
      <Line data={data} options={options} />
    </div>
  );
}

export default OutboundTransfer;
