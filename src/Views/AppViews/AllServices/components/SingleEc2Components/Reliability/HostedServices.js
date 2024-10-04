
import React from 'react';
import { Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const HostedServicesOverview = () => {
  const services = [
    {
      name: 'Service A',
      healthStatus: 'Healthy',
      responseTime: '120 ms',
      errorRate: '3%',
      availability: '99.8%',
      throughput: '1000/min',
    },
    {
      name: 'Service B',
      healthStatus: 'Degraded',
      responseTime: '180 ms',
      errorRate: '5%',
      availability: '98.5%',
      throughput: '800/min',
    },
    {
      name: 'Service C',
      healthStatus: 'Healthy',
      responseTime: '100 ms',
      errorRate: '1%',
      availability: '99.9%',
      throughput: '1200/min',
    },
  ];

  return (
    <Card className='w-full py-2 px-4 rounded-md '>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Hosted Services Overview</Typography>}
        subheader={<Typography variant="body2" color="white">Display a list of hosted services with key metrics</Typography>}
      />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Service Name</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Health Status</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Response Time</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Error Rate</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Availability</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Throughput</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: '#383874' }}>{service.name}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{service.healthStatus}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{service.responseTime}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{service.errorRate}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{service.availability}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{service.throughput}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default HostedServicesOverview;
