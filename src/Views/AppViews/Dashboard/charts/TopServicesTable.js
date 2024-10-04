import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

class Topusage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        { 
          name: 'EC2', 
          cpuUtilization: '85%',
          memoryUtilization: '65%'
        },
        { 
          name: 'Lambda', 
          cpuUtilization: '-',
          memoryUtilization: '-'
        },
        { 
          name: 'RDS Instance', 
          cpuUtilization: '65%',
          memoryUtilization: '50%'
        },
        { 
          name: 'Amazon S3', 
          cpuUtilization: '60%',
          memoryUtilization: '45%'
        },
        { 
          name: 'EKS', 
          cpuUtilization: '65%',
          memoryUtilization: '50%'
        },
        { 
          name: 'NLB', 
          cpuUtilization: '60%',
          memoryUtilization: '45%'
        }
      ]
    };
  }

  render() {
    const cellStyle = {
      padding: '8px 2px', // Reduced padding
      borderBottom: '1px solid #E8E8F7',
      color: '#383874',
      fontSize: '9px',
    };

    const headerCellStyle = {
      ...cellStyle,
      color: '#383874',
      fontWeight: 'bold',
      backgroundColor: 'white',
    };

    return (
      <div className="p-1">
        <TableContainer className="h-80">
          <Table size="small" stickyHeader aria-label="services usage table">
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{...headerCellStyle, width: '40%'}}
                >
                  SERVICE NAME
                </TableCell>
                <TableCell 
                  align="center"
                  sx={headerCellStyle}
                >
                  CPU UTILIZATION
                </TableCell>
                <TableCell 
                  align="center"
                  sx={headerCellStyle}
                >
                  MEMORY UTILIZATION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.services.map((service) => (
                <TableRow 
                  key={service.name}
                >
                  <TableCell 
                    sx={{...cellStyle, color: '#383874'}}
                  >
                    {service.name}
                  </TableCell>
                  <TableCell 
                    align="center"
                    sx={cellStyle}
                  >
                    {service.cpuUtilization}
                  </TableCell>
                  <TableCell 
                    align="center"
                    sx={cellStyle}
                  >
                    {service.memoryUtilization}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Topusage;
