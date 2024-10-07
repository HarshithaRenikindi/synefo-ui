// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';  // Import Doughnut for the chart
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// // import ChartDataLabels from 'chartjs-plugin-datalabels';
// // ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// // Register the required chart components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const InstanceStatus = () => {
//   // Data for the doughnut chart
//   const data = {
//     labels: ['Running', 'N/A'],  // Labels for instance statuses
//     datasets: [{
//       label: 'Instance Status Distribution',
//       data: [99, 1],  // Sample data for running vs stopped instances
//       backgroundColor: [
//         'rgb(0, 185, 41)',  // Color for running instances
//         'rgb(221, 225, 248)',  // Color for stopped instances
//       ],
//       hoverOffset: 4
//     }]
//   };

//   const options = {
//     cutout: '70%',  // Adjust the doughnut thickness
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,  // Hides the default legend
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             const label = tooltipItem.label || '';
//             const value = tooltipItem.raw || 0;
//             return `${label}: ${value}`; // Customize tooltip label
//           }
//         }
//       },
//       datalabels: {
//         formatter: (value, context) => {
//           const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
//           const percentage = Math.round((value / total) * 100);
//           return `${percentage}%`;  // Return the percentage to display
//         },
//         anchor: 'center',
//         align: 'center',
//         color: '#000',  // Text color
//         font: {
//           size: '20',  // Font size
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 space-x-6 w-full max-w-5xl mx-auto mt-8">
//       {/* Chart Section */}
     
//       <div className="flex flex-col justify-center">
//         <div className=''>
//             <h3 className="text-lg font-bold mb-2 text-black ">Instance Status</h3>
//             <p className="text-gray-500 mb-4">Check the overall health of the EC2 instance, including its status.</p>
//         </div>

//         <div className="relative w-32 h-32">
//           <Doughnut data={data} options={options} />
//         </div>
//         <p className="text-green-600 font-semibold text-lg mt-2">Instance Status</p>
//         <p className="text-green-600">Running</p>
//       </div>

//       {/* Instance Details Section */}
//       <div className="text-sm">
       
//         <div className="">
//           <div className="text-gray-700 flex">
//             <p className="font-semibold text-black">Instance ID</p>
//             <p className='text-black'>i-1234</p>
//           </div>

//           <div className="text-gray-700 flex">
//             <p className="font-semibold text-black">Instance Type</p>
//             <p className='text-black'>t2.micro</p>
//           </div>

//           <div className="text-gray-700 flex">
//             <p className="font-semibold text-black">Availability Zone</p>
//             <p className='text-black'>us-east-1a</p>
//           </div>

//           <div className="text-gray-700 flex">
//             <p className="font-semibold text-black">System Checks</p>
//             <p className='text-black'>Passed</p>
//           </div>

//           <div className="text-gray-700 flex">
//             <p className="font-semibold text-black">Custom Alerts</p>
//             <p className='text-black'>No Alerts</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstanceStatus;


import React from 'react';
import { Doughnut } from 'react-chartjs-2';  // Import Doughnut for the chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const InstanceStatus = () => {
  // Data for the doughnut chart
  const data = {
    labels: ['Running', 'N/A'],  // Labels for instance statuses
    datasets: [{
      label: 'Instance Status Distribution',
      data: [99, 1],  // Sample data for running vs stopped instances
      backgroundColor: [
        'rgb(0, 185, 41)',  // Color for running instances
        'rgb(221, 225, 248)',  // Color for stopped instances
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    cutout: '70%',  // Adjust the doughnut thickness
    responsive: true,
    plugins: {
      legend: {
        display: false,  // Hides the default legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`; // Customize tooltip label
          }
        }
      },
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-white shadow-md rounded-lg p-6 space-x-0 lg:space-x-6 w-full  mx-auto">
      {/* Left Section: Chart and Status */}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className='mb-4'>
          <h3 className="text-lg font-bold mb-2 text-black">Instance Status</h3>
          <p className="text-gray-500">Check the overall health of the EC2 instance, including its status.</p>
        </div>
        
        {/* Chart Section */}
        <div className='flex justify-between w-full'>

        <div className="relative ">
            <div className='h-32'>   
                <Doughnut data={data} options={options} />
            </div>
        {/* Status Labels */}
        <p className="text-green-600 font-semibold text-lg mt-2">Instance Status</p>
        <p className="text-green-600">Running</p>
        </div>

        <div className="text-sm mt-6 lg:mt-0 lg:ml-8">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between">
            <p className="font-semibold text-black">Instance ID:</p>
            <p className="text-black">i-1234</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-black">Instance Type:</p>
            <p className="text-black">t2.micro</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-black">Availability Zone:</p>
            <p className="text-black">us-east-1a</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-black">System Checks:</p>
            <p className="text-black">Passed</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-black">Custom Alerts:</p>
            <p className="text-black">No Alerts</p>
          </div>
        </div>
      </div>
        </div>
      </div>

      {/* Right Section: Instance Details */}
     
    </div>
  );
};

export default InstanceStatus;

