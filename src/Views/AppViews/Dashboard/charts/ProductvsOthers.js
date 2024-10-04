import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; 
 
const ProductionVsOthers = () => {
  // Data for the doughnut chart
  const data = {
    // labels: ['Procurement', 'HR', 'Supply Chain', 'EMS'],
    datasets: [{
      label: 'Production Vs Others',
      data: [20, 80],
      backgroundColor: [
        'rgb(255, 144, 102)',
        'rgb(134, 118, 255)'
       
       
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
        <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Production Vs Others</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <h1 style={{ fontSize: '30px', margin: '0', color: '#333' }}>$6,71,246</h1>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: 'green', marginLeft: '10px' }}>
            <span style={{ marginRight: '5px' }}>▲</span>
            <span>10%</span>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '0', display: 'flex' }}>Compared to&nbsp; <p style={{color: 'rgb(56, 56, 116)', margin: '0'}}>$6,10,136</p> &nbsp;Last Month</p>
      </div>
      <div style={{height: '200px', width: '200px', marginLeft: 'auto', marginRight: 'auto'}}><Doughnut data={data} options={options} /></div>
     
      <div style={{ paddingTop: '5px', marginTop: '20px' }}>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
         
          Production
          <span style={{ marginLeft: '50px', minWidth: '70px' }}>$571246</span> {/* Moved amount to the left */}
          <div style={{
            height: '5px',
            backgroundColor: 'rgb(134, 118, 255)',
            width: '100%',
            display: 'inline-block',
            marginLeft: 'auto'
          }}></div>
          <div style={{
            height: '5px',
            backgroundColor: '#ddd',
            width: '20%',
            display: 'inline-block',
          }}></div>
          <span style={{ marginLeft: '10px' }}>80%</span>
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
       
          Others
          <span style={{ marginLeft: '75px', minWidth: '70px' }}>$10000</span> {/* Moved amount to the left */}
          <div style={{
            height: '5px',
            backgroundColor: 'rgb(255, 144, 102)',
            width: '8%',
            display: 'inline-block',
            marginLeft: 'auto'
          }}></div>
          <div style={{
            height: '5px',
            backgroundColor: '#ddd',
            width: '33%',
            display: 'inline-block',
          }}></div>
          <span style={{ marginLeft: '10px' }}>20%</span>
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
       
         
        </div>
      </div>
    </div>
  );
};
 
export default ProductionVsOthers;