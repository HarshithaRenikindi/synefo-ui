import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box
} from '@mui/material';

const EncryptionComplianceDashboard = () => {
  const encryptionData = {
    instanceId: 'i-012345678abcdef0',
    totalAttached: '5',
    encryptedVolumes: '4',
    unencryptedVolumes: '1',
    encryptionAlgorithms: 'AES-256: 3 volumes\nRSA-512: 1 volume',
    volumeTypes: 'General Purpose SSD (gp2): 3 volumes\nProvisioned IOPS SSD (io1): 1 volume\nMagnetic (standard): 1 volume',
    compliancePercentage: '80%'
  };

  const InfoItem = ({ title, value }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" color="#383874" gutterBottom sx={{fontWeight:"bold"}}>
        {title}
      </Typography>
      <Typography variant="body1" color="#383874" sx={{ whiteSpace: 'pre-line' }}>
        {value}
      </Typography>
    </Box>
  );

  return (
    <Card className='mt-4 px-4 rounded-md' >
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
          ENCRYPTION COMPLIANCE
        </Typography>
        
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: 4 
          }}
        >
          <InfoItem 
            title="Instance ID" 
            value={encryptionData.instanceId}
          />
          
          <InfoItem 
            title="Total Attached" 
            value={encryptionData.totalAttached}
          />
          
          <InfoItem 
            title="Encrypted Volumes" 
            value={encryptionData.encryptedVolumes}
          />
          
          <InfoItem 
            title="Unencrypted Volumes" 
            value={encryptionData.unencryptedVolumes}
          />
          
          <InfoItem 
            title="Encryption Algorithms" 
            value={encryptionData.encryptionAlgorithms}
          />
          
          <InfoItem 
            title="Volume Types" 
            value={encryptionData.volumeTypes}
          />
          
          <InfoItem 
            title="Encryption Compliance Percentage" 
            value={encryptionData.compliancePercentage}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EncryptionComplianceDashboard;