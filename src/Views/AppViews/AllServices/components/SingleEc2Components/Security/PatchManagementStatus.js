
import React from 'react';
// Note: You'll need to install these MUI packages:
// npm install @mui/material @emotion/react @emotion/styled

import { 
  Card, 
  CardContent, 
  Typography, 
  Box
} from '@mui/material';

const PatchManagementDashboard = () => {
  const patchData = {
    operatingSystem: 'Amazon Linux 2',
    lastPatchCheck: '2023-11-16 08:00 AM',
    latestPatchLevel: 'Up to date',
    pendingPatches: 0,
    installedPatches: 180,
    failedPatches: 0,
    patchingSchedule: 'Weekly on Sundays'
  };

  const InfoItem = ({ title, value }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" color="#383874" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="#383874">
        {value}
      </Typography>
    </Box>
  );

  return (
    <Card 
      sx={{ 
        maxWidth: 1200, 
        m: 'auto', 
      }}
    >
      <CardContent>
        <Typography 
          variant="h6" 
          component="h2" 
          sx={{ 
            mb: 3, 
            fontWeight: 600,
            color: '#383874'
          }}
        >
          PATCH MANAGEMENT STATUS
        </Typography>
        
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: 4 
          }}
        >
          <InfoItem 
            title="Operating System" 
            value={patchData.operatingSystem}
          />
          
          <InfoItem 
            title="Last Patch Check Timestamp" 
            value={patchData.lastPatchCheck}
          />
          
          <InfoItem 
            title="Latest Patch Level" 
            value={patchData.latestPatchLevel}
          />
          
          <InfoItem 
            title="No. of Pending Patches" 
            value={patchData.pendingPatches}
          />
          
          <InfoItem 
            title="No. of Installed Patches" 
            value={patchData.installedPatches}
          />
          
          <InfoItem 
            title="No. of Failed Patches" 
            value={patchData.failedPatches}
          />
          
          <InfoItem 
            title="Patching Schedule" 
            value={patchData.patchingSchedule}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PatchManagementDashboard;
