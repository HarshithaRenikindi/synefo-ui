import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
 
ChartJS.register(ArcElement, Tooltip, Legend);
 
const ProductPrediction = () => {
  // Data for the doughnut chart
  const data = {
    // labels: ['Procurement', 'HR', 'Supply Chain', 'EMS'],
    datasets: [{
      label: 'Product Prediction',
      data: [35, 25, 22, 18],
      backgroundColor: [
        'rgb(134, 118, 255)', // Procurement
        'rgb(255, 144, 102)', // HR
        'rgb(255, 204, 65)',  // Supply Chain
        'rgb(66, 205, 126)'   // EMS
      ],
      hoverOffset: 4
    }]
  };
 
  const options = {
    cutout: '58%',
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
       
      },
   
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${percentage}%`;
        },
        anchor: 'center',
        align: 'center',
        color: '#fff', // Make the text inside the doughnut white
        font: {
          size: '16',
        }
      }
    }
  };
 
  return (
    <div style={{
      width: '100%',
      height: '500px',
      maxWidth: '380px',
      margin: 'auto',
      textAlign: 'left',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Product Prediction Wise Cost</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <h1 style={{ fontSize: '30px', margin: '0', color: '#333' }}>$6,71,246</h1>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: 'green', marginLeft: '10px' }}>
            <span style={{ marginRight: '5px' }}>▲</span>
            <span>10%</span>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '0', display: 'flex' }}>Compared to&nbsp; <p style={{color: 'rgb(56, 56, 116)', margin: '0'}}> $5,40,136</p> &nbsp;Previous Month</p>
      </div>
      <div style={{height: '200px', width: '200px', marginLeft: 'auto', marginRight: 'auto'}}><Doughnut data={data} options={options} /></div>
     
      <div style={{ paddingTop: '5px', marginTop: '20px' }}>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
         
          Procurement
          <span style={{ marginLeft: '40px', minWidth: '70px' }}>$7,860</span> {/* Moved amount to the left */}
          <div style={{
            height: '5px',
            backgroundColor: 'rgb(134, 118, 255)',
            width: '35%',
            display: 'inline-block',
            marginLeft: 'auto'
          }}></div>
          <div style={{
            height: '5px',
            backgroundColor: '#ddd',
            width: '65%',
            display: 'inline-block',
          }}></div>
          <span style={{ marginLeft: '10px' }}>35%</span>
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
       
          HR
          <span style={{ marginLeft: '100px', minWidth: '70px' }}>$3,390</span> {/* Moved amount to the left */}
          <div style={{
            height: '5px',
            backgroundColor: 'rgb(255, 144, 102)',
            width: '25%',
            display: 'inline-block',
            marginLeft: 'auto'
          }}></div>
          <div style={{
            height: '5px',
            backgroundColor: '#ddd',
            width: '75%',
            display: 'inline-block',
          }}></div>
          <span style={{ marginLeft: '10px' }}>25%</span>
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
       
          Supply Chain
          <span style={{ margin:'0 0 0 36px', minWidth: '70px' }}>$5,132</span>
          <div style={{
            height: '5px',
            backgroundColor: 'rgb(255, 204, 65)',
            width: '10%',
            display: 'inline-block',
            // marginLeft: 'auto'
          }}></div>
          <div style={{
            height: '5px',
            backgroundColor: '#ddd',
            width: '19%',
            display: 'inline-block',
          }}></div>
          <span style={{ marginLeft: '10px' }}>22%</span>
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
       
          EMS
          <span style={{ marginLeft: '90px', minWidth: '70px' }}>$1100</span> {/* Moved amount to the left */}
          <div style={{
            height: '5px',
            backgroundColor: 'rgb(66, 205, 126)',
            width: '8%',
            display: 'inline-block',
            marginLeft: 'auto'
          }}></div>
          <div style={{
            height: '5px',
            backgroundColor: '#ddd',
            width: '32%',
            display: 'inline-block',
          }}></div>
          <span style={{ marginLeft: '10px' }}>18%</span>
        </div>
      </div>
    </div>
  );
};
 
export default ProductPrediction;