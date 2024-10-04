import React from 'react';
import { Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const InstanceHealthCheck = () => {
  const instances = [
    {
      id: 'i-01234dc',
      type: 't2.micro',
      launchTime: '14:58:16 09/02/2024',
      availabilityZone: 'us-west-1a',
      status: 'Passed',
      description: 'System status check passed',
      severity: 'High',
      actionRequired: 'Investigate',
      reason: 'None',
    },
    {
      id: 'i-7abc123',
      type: 't3.micro',
      launchTime: '03:22:05 10/02/2024',
      availabilityZone: 'us-west-1a',
      status: 'Passed',
      description: 'Instance Status Check Passed',
      severity: 'High',
      actionRequired: 'Action Required',
      reason: 'None',
    },
    {
      id: 'i-9fcdb4b6',
      type: 't3.large',
      launchTime: '08:00:56 10/02/2024',
      availabilityZone: 'us-west-1a',
      status: 'Failed',
      description: 'System Status Check Failed',
      severity: 'Medium',
      actionRequired: 'Investigate',
      reason: 'CPU utilization exceeding threshold',
    },
    {
      id: 'i-9fcdb4b2',
      type: 't3.micro',
      launchTime: '10:45:32 23/02/2024',
      availabilityZone: 'us-west-1a',
      status: 'Failed',
      description: 'System Status Check Failed',
      severity: 'Low',
      actionRequired: 'Action Required',
      reason: 'Network Connectivity failed',
    },
    {
      id: 'i-9fcdb4b3',
      type: 't3.micro',
      launchTime: '15:56:54 29/02/2024',
      availabilityZone: 'us-west-1a',
      status: 'Passed',
      description: 'Instance Status Check Passed',
      severity: 'High',
      actionRequired: 'Investigate',
      reason: 'None',
    },
  ];

  return (
    <Card sx={{ width: '100%', margin: 'auto' }}>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Instances Health Check</Typography>}
        subheader={<Typography variant="body2" color="#383874">Detailed log of recent health check for a specific EC2 instance</Typography>}
      />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Instance ID</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Instance Type</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Launch Time</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Availability Zone</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Instance Status</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Description</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Severity</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Action Required</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{fontWeight:'bold'}}>Reason</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instances.map((instance, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: '#383874' }}>{instance.id}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{instance.type}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{instance.launchTime}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{instance.availabilityZone}</TableCell>
                  <TableCell style={{ color: '#383874' }}>
                    {instance.status}
                  </TableCell>
                  <TableCell style={{ color: '#383874' }}>{instance.description}</TableCell>
                  <TableCell style={{ color: '#383874' }}>
                    {instance.severity}
                  </TableCell>
                  <TableCell style={{ color: '#383874' }}>{instance.actionRequired}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{instance.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default InstanceHealthCheck;
