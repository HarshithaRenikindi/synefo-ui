import React from 'react';
import { Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AccessControlTable = () => {
  const permissions = [
    {
      resource: 'S3 Bucket',
      permissions: 'Read, Write, List, and Delete operations',
      compliance: 'Compliant'
    },
    {
      resource: 'RDS Database',
      permissions: 'Read-only access',
      compliance: 'Non-compliant'
    },
    {
      resource: 'EC2 Instances',
      permissions: 'Full administrative privileges',
      compliance: 'Compliant'
    },
    {
      resource: 'IAM Users',
      permissions: 'Limited to specific API operations',
      compliance: 'Compliant'
    },
    {
      resource: 'Lambda Functions',
      permissions: 'Invoke and manage functions',
      compliance: 'Compliant'
    },
    {
      resource: 'CloudFront Distributions',
      permissions: 'Read and modify settings',
      compliance: 'Compliant'
    }
  ];

  return (
    <Card className='h-[330px] 2xl:h-[490px]'>
      <CardHeader
        title={<Typography variant="h5" color="#383874">Access Control and Permissions</Typography>}
        subheader={<Typography variant="body2" color="#383874">Overview of access control permissions for various resources</Typography>}
      />
      <CardContent>
        <div className='max-h-[200px] overflow-auto 2xl:max-h-[300px] 2xl:overflow-auto'>
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: '#383874', fontWeight: 'bold', position: 'sticky', top: 0, background: 'white' }}>Resource</TableCell>
                  <TableCell style={{ color: '#383874', fontWeight: 'bold', position: 'sticky', top: 0, background: 'white' }}>Permissions</TableCell>
                  <TableCell style={{ color: '#383874', fontWeight: 'bold', position: 'sticky', top: 0, background: 'white' }}>Compliance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {permissions.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ color: '#383874' }}>{row.resource}</TableCell>
                    <TableCell style={{ color: '#383874' }}>{row.permissions}</TableCell>
                    <TableCell style={{ color: '#383874' }}>{row.compliance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessControlTable;
