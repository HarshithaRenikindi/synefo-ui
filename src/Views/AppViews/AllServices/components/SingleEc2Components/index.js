import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../header';
import MetricCards from './matrixCard';
import TabNavigation from './TabNavigations';
import Performance from './Performance';
import Availability from './Availability';
import Reliability from './Reliability';
import EndUsage from './EndUsage';
import Compliance from './Compliance';
import DataProtection from './DataProtection';
import Security from './Security';


const SingleEc2 = () => {
  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState('Performance');

  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Section */}
      <Header />

      {/* Metric Cards */}
      <MetricCards />

      {/* Tab Navigation */}
      <div className="flex justify-center py-2">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'Performance' && <Performance />}
      {activeTab === 'Availability' && <Availability />}
      {activeTab === 'Reliability' && <Reliability />}
      {activeTab === 'End Usage' && <EndUsage />}
      {activeTab === 'Compliance' && <Compliance />}
      {activeTab === 'Data Protection' && <DataProtection />}
      {activeTab === 'Security' && <Security />}

    </Box>
  );
};

export default SingleEc2;
