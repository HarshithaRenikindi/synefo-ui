
// export default ErrorMessagesCount;

import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Throughput = () => {
  // Generate the labels for the X-axis (e.g., months)
  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '02:10', '02:20', '02:30', '02:40', '02:50', '03:00', '03:10', '03:20', '03:30', '03:40', '03:50'];

  // Data for the bar chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Data Transfer Rate',
      data: [48, 119, 121, 136, 145, 149, 132, 126, 168, 143, 135, 145, 48, 119, 121, 136, 145, 149, 132, 126, 168, 143, 135, 145 ],
      backgroundColor: 'rgb(83, 202, 67)', // Use a single color for all bars
      borderColor: 'rgb(83, 202, 67)',
      borderWidth: 1,
      borderRadius: 4, // Set a uniform border radius for all bars
      barThickness: 15, // Set bar thickness (adjust as needed)
      // Adding padding to the bars
      padding: 16,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: false, // Control stacking of bars
        barPercentage: 0.6, // Increase spacing between bars (value < 1 for more space)
      },
      y: {
        beginAtZero: true, // Start Y axis at zero
        ticks: {
          // Custom Y-axis values as labels
          callback: function(value) {
            return value + ' Mbps'; // Append ' Mbps' to each tick value
          },
          // Specify your custom tick values
          // Ensure that your data values fit within this range
          // Replace this with the desired values
          stepSize: 50, // Increment by 50
          // You can also define specific ticks like this:
          // Suggested: [0, 50, 100, 150, 200]
          values: [0, 50, 100, 150, 200], // Set custom tick values
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Set grid line color with reduced opacity
        },
      },
    },
  };

  return (
    <div className='w-full, bg-white py-2 px-4 rounded-md'> {/* Set the size of the container */}
      <h2>Throughput</h2>
      <p>The rate of successful data transfer over a network</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Throughput;
