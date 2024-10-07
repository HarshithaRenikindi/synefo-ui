

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AlertCircle, CheckCircle } from 'lucide-react';
import WAFRDashboard from './WAFR dashboard';
import RegionWiseResourcesTable from './Regionresources';
import Topusage from './TopServicesTable';
import TopServicesCostTable from './Topcost';
import axios from 'axios';
        
        const SecurityScanCard = () => {
          const [isScanned, setIsScanned] = useState(false);
          const [showSuccess, setShowSuccess] = useState(false);
          const [titles, setTitles] = useState([]); // Change to array for multiple titles
          const [error, setError] = useState('');
          const [loading, setLoading] = useState(false); // Optional loading state
        
          const handleScanNow = async () => {
            setLoading(true); // Start loading
            try {
              const response = await axios.get("https://kocubd7o35.execute-api.us-east-1.amazonaws.com/dev/findings");
              setTitles(response.data.findings.map(finding => finding.Title)); // Extract titles
              setError(''); // Reset error if successful
              setIsScanned(true); // Mark as scanned
            } catch (error) {
              setError('Failed to fetch workloads');
              console.error('Error fetching workloads:', error);
            } finally {
              setLoading(false); // Stop loading
            }
          };
        
          if (showSuccess) {
            return (
              <div className="flex flex-col items-center justify-center h-full">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <p className="text-center text-[#383874] mb-4">Email Sent Successfully</p>
                <Button 
                  variant="contained" 
                  size='small'
                  onClick={() => {
                    setShowSuccess(false);
                    setIsScanned(false);
                    setTitles([]); // Reset titles
                    setError('');
                  }}
                >
                  Done
                </Button>
              </div>
            );
          }
        
          if (!isScanned) {
            return (
              <>
                <h2 className="font-bold mb-4" style={{ color: '#383874', textAlign: 'left' }}>
                  Security and Compliance Issues
                </h2>
                <p style={{ color: '#383874', textAlign: 'left' }}>Click to scan all your security issues</p>
                <div style={{ marginTop: '35%' }}>
                  <Button 
                    variant="contained" 
                    size='small'
                    sx={{ padding: '8px 16px' }}
                    onClick={handleScanNow}
                  >
                    Scan Now
                  </Button>
                </div>
              </>
            );
          }
        
        
          return (
            <>
              <h2 className="font-bold mb-4" style={{ color: '#383874', textAlign: 'left' }}>
                Security and Compliance Issues
              </h2>
              {loading && <p>Loading...</p>}
              {error && (
                <div className="mb-4">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
              <div className="space-y-3 h-60 overflow-auto">
  <div className="flex text-sm font-medium text-[#000000] border-b pb-2 sticky top-0 bg-white z-10">
    <div className="w-16">S.No</div>
    <div className="flex-1">Issue Title</div>
  </div>

  {titles.length > 0 ? titles.map((title, index) => (
    <div
      key={index}
      className="mb-4 flex flex-col justify-start items-start"
      style={{
        borderBottom: '1px solid #eaeaea',
        paddingBottom: '10px',
      }}
    >
      <h3
        className="font-medium text-sm"
        style={{
          color: '#383874',
          textAlign: 'left',
          width: '100%',
        }}
      >
        {index + 1}. {` ${title}`}
      </h3>
    </div>
  )) : <p>No findings available.</p>}
</div>
<div style={{ marginTop: 'auto', paddingTop: '20px' }}>
  <Button
    variant="contained"
    size='small'
    onClick={() => setShowSuccess(true)}
  >
    Connect With Us
  </Button>
</div>

            </>
          );
        };
        

const Dashboard = () => {
  return (
    <div className="p-2">






      <div className="flex flex-col md:flex-row md:gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96 w-full ">
          <h2 className="font-bold mb-4" style={{ color: '#383874', textAlign: 'left' }}>WAFR</h2>
          <WAFRDashboard />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md  h-96  w-10/12 ">
          <SecurityScanCard />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md    w-full ">
          <h2 className="font-bold mb-4" style={{ color: '#383874', textAlign: 'left' }}>Region Wise Resources Table</h2>
          <RegionWiseResourcesTable />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md  w-full ">
          <h2 className="font-bold mb-4" style={{ color: '#383874', textAlign: 'left' }}>Top Services by Usage</h2>
          <Topusage />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md  w-full">
          <h2 className="font-bold mb-4" style={{ color: '#383874', textAlign: 'left' }}>Top Services by Cost</h2>
          <TopServicesCostTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
