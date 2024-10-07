import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

class TopServicesCostTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        { 
          name: 'EC2', 
          cost: '$6,200'
        },
        { 
          name: 'Lambda', 
          cost: '$5,400'
        },
        { 
          name: 'RDS Instance', 
          cost: '$4,500'
        },
        { 
          name: 'Amazon S3', 
          cost: '$3,500'
        },
        { 
          name: 'EKS', 
          cost: '$4,500'
        },
        { 
          name: 'NLB', 
          cost: '$3,500'
        }
      ]
    };
  }

  render() {
    const cellStyle = {
      padding: '12px 10px',
      borderBottom: '1px solid #E8E8F7',
      color: '#383874',
    };

    const headerCellStyle = {
      ...cellStyle,
color: '#383874',
      fontWeight: 'bold',
      backgroundColor: 'white',
    };

    return (
      <div className="p-1">
     
        <TableContainer >
          <Table size="small" stickyHeader aria-label="services cost table">
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{...headerCellStyle, width: '50%'}}
                >
                  SERVICE NAME
                </TableCell>
                <TableCell 
                  align="right"
                  sx={headerCellStyle}
                >
                  COST (MONTHLY)
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
                    align="right"
                    sx={{...cellStyle, fontWeight: 'medium'}}
                  >
                    {service.cost}
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

export default TopServicesCostTable;