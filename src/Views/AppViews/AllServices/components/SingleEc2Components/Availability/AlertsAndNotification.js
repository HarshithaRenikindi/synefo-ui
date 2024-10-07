import React, { useState } from 'react';
import { Box, Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AlertsNotifications = () => {
  const [alerts] = useState([
    {
      timestamp: '2023-11-06 09:45 AM',
      alert: 'Instance was stopped and then started',
      description: 'Instance was stopped and then started. No issues detected.',
    },
    {
      timestamp: '2023-11-08 09:30 AM',
      alert: 'High CPU Utilization (Threshold: 90%) for 5 minutes',
      description: 'Instance performance may be impacted.',
    },
    {
      timestamp: '2023-11-10 11:30 AM',
      alert: 'Disk Space Running Low (Threshold: 10 GB)',
      description: 'Consider cleaning up or expanding storage.',
    },
    {
      timestamp: '2023-11-08 09:30 AM',
      alert: 'High CPU Utilization (Threshold: 90%) for 5 minutes',
      description: 'Instance performance may be impacted.',
    },
    // Add more alerts to test scrolling
    {
      timestamp: '2023-11-12 01:00 PM',
      alert: 'Network Latency Detected',
      description: 'High network latency detected. Check connectivity.',
    },
    {
      timestamp: '2023-11-13 03:15 PM',
      alert: 'Security Group Change Detected',
      description: 'The security group has been modified.',
    },
  ]);

  return (
    <Card sx={{ width: '100%', margin: 'auto', height: '300px' }}>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Alerts and Notifications</Typography>}
        subheader={<Typography variant="body2" color="#383874">A list of recent alerts and notifications related to the instance's availability</Typography>}
      />
      <CardContent>
        <TableContainer sx={{ maxHeight: '200px', overflowY: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#383874'}} sx={{fontWeight:'bold'}}>Timestamp</TableCell>
                <TableCell style={{ color: '#383874'}} sx={{fontWeight:'bold'}}>Alert</TableCell>
                <TableCell style={{ color: '#383874'}} sx={{fontWeight:'bold'}}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alerts.map((alert, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: '#383874' }}>{alert.timestamp}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{alert.alert}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{alert.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AlertsNotifications;
