import React from 'react';
import { Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Patching = () => {
  const patchData = [
    {
      patchGroup: 'Product',
      schedule: '2023-07-15 10:45 AM',
      os: 'Windows',
      instance: 5,
      iam: 'Sys-Manager',
      policy: 'Policy2',
      tag: 'Key',
      instanceType: 't2.micro',
      role: 'AmazonEC2RoleforSSM',
    },
    {
      patchGroup: 'Product',
      schedule: '2023-07-16 02:20 PM',
      os: 'Linux',
      instance: 8,
      iam: 'Sys-Manager',
      policy: 'Policy2',
      tag: 'Restarted',
      instanceType: 'm5.large',
      role: 'AmazonEC2RoleforSSM',
    },
    {
      patchGroup: 'Product',
      schedule: '2023-07-17 11:30 AM',
      os: 'Windows',
      instance: 5,
      iam: 'Sys-Manager',
      policy: 'Policy2',
      tag: 'Analyzing, Scaling',
      instanceType: 'c5.xlarge',
      role: 'AmazonEC2RoleforSSM',
    },
    {
      patchGroup: 'Product',
      schedule: '2023-07-18 04:15 PM',
      os: 'Linux',
      instance: 9,
      iam: 'Sys-Manager',
      policy: 'Policy2',
      tag: 'Repairing, Restoring',
      instanceType: 'r5.2xlarge',
      role: 'AmazonEC2RoleforSSM',
    },
  ];

  return (
    <Card sx={{ width: '100%', margin: 'auto' }}>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Patching</Typography>}
        subheader={<Typography variant="body2" color="#383874">Patching updates software to fix issues and boost security.</Typography>}
      />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Patch Group</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Schedule</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>OS</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Instance</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>IAM</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Policy</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>TAG</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Instance Type</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patchData.map((patch, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: '#383874' }}>{patch.patchGroup}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.schedule}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.os}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.instance}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.iam}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.policy}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.tag}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.instanceType}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{patch.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Patching;
