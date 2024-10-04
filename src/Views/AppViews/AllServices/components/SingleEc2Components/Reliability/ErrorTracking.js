import React from 'react';
import { Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ErrorTracking = () => {
  const errors = [
    {
      timestamp: '2023-07-10 10:45 AM',
      errorCode: 1,
      errorMessage: 'Request would have succeeded, but DryRun flag is set',
      eventId: '75fd253e-f2eb-4df8-947f',
      eventName: 'Run instances',
      eventType: 'AwsApiCall'
    },
    {
      timestamp: '2023-07-10 02:20 PM',
      errorCode: 1,
      errorMessage: 'Microsoft SQL server is not supported',
      eventId: '75fd253e-f2eb-4df8-947f',
      eventName: 'Run instances',
      eventType: 'AwsApiCall'
    },
    {
      timestamp: '2023-07-17 11:32 AM',
      errorCode: 1,
      errorMessage: 'Microsoft SQL server is not supported',
      eventId: '75fd253e-f2eb-4df8-947f',
      eventName: 'Run instances',
      eventType: 'AwsApiCall'
    },
    {
      timestamp: '2023-07-18 04:15 PM',
      errorCode: 1,
      errorMessage: 'Request would have succeeded, but DryRun flag is set',
      eventId: '75fd253e-f2eb-4df8-947f',
      eventName: 'Run instances',
      eventType: 'AwsApiCall'
    }
  ];

  return (
    <Card className='w-full py-2 px-4 rounded-md '>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Error Tracking</Typography>}
        subheader={<Typography variant="body2" color="#383874">Detailed log of recent error events for a specific EC2 instance</Typography>}
      />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Timestamp</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Error Code</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Error Message</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Event ID</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Event Name</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Event Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {errors.map((error, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: '#383874' }}>{error.timestamp}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{error.errorCode}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{error.errorMessage}</TableCell>
                  <TableCell style={{ color: '#383874' }} className="font-mono">{error.eventId}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{error.eventName}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{error.eventType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ErrorTracking;
