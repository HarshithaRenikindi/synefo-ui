import React from 'react';
import { Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CustomAlerts = () => {
  const alerts = [
    {
      timestamp: '2023-11-20 14:30',
      description: 'Added inbound rule for SSH (22)',
      changeId: 'Change-1',
      user: 'AdminUser',
      status: 'Applied',
    },
    {
      timestamp: '2023-11-18 09:15',
      description: 'Removed outbound rule for HTTP (80)',
      changeId: 'Change-2',
      user: 'DevOpsUser',
      status: 'Reverted',
    },
    {
      timestamp: '2023-11-16 16:45',
      description: 'Modified inbound rule for RDP (3389)',
      changeId: 'Change-3',
      user: 'SecurityTeam',
      status: 'Applied',
    },
  ];

  return (
    <Card sx={{ width: '100%', margin: 'auto', height: { xs: '330px', xl: '490px' } }}>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Custom Alerts</Typography>}
        subheader={<Typography variant="body2" color="#383874">Custom Reliability Metrics</Typography>}
      />
      <CardContent sx={{ padding: '0px' }}>
        <TableContainer sx={{ maxHeight: '200px', overflowY: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Timestamp</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Change Description</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Change ID</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>User</TableCell>
                <TableCell style={{ color: '#383874' }} sx={{ fontWeight: 'bold' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alerts.map((alert, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: '#383874' }}>{alert.timestamp}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{alert.description}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{alert.changeId}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{alert.user}</TableCell>
                  <TableCell style={{ color: '#383874' }}>{alert.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default CustomAlerts;
