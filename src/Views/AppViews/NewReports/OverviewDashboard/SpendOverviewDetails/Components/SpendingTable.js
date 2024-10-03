import React, { Component } from "react";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  // Button,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#ffffffff",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffffff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export class SpendingTable extends Component {
  renderTable = () => {
    return (
      <TableContainer className="table">
        <Table style={{minWidth: 2000}}>
          {this.renderTableHead()}
          {this.renderTableBody()}
        </Table>
      </TableContainer>
    );
  };

  //  Render table head
  renderTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>Tags</TableCell>
          <TableCell>Instance ID </TableCell>
          <TableCell>Instance Type</TableCell>
          <TableCell>Instance Status</TableCell>
          <TableCell>Pricing model</TableCell>
          <TableCell>Availability zone</TableCell>
          <TableCell align="center">Ondemand cost / hr</TableCell>
          <TableCell>RI cost / hr</TableCell>
          <TableCell align="center">Usage Hours</TableCell>
          <TableCell align="center">Add-ons</TableCell>
          <TableCell align="center">Total Spend</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  //  Render table body
  renderTableBody = () => {
    let { data } = this.props;
    return (
      <TableBody>
        {data?.length ? (
          data.map((details) => {
            let {
              tags,
              InstanceID,
              type,
              status,
              priceModel,
              availabilityZone,
              onDemandCostHr,
              RICostHr,
              usageHrs,
              addOns,
              totalSpend,
            } = details;
            return (
              <TableRow>
                <TableCell>{tags}</TableCell>
                <TableCell>
                {/* {InstanceID} */}
                <HtmlTooltip className="table-tooltip" title={InstanceID}>
                      <Box className="instance-id">{InstanceID}</Box>
                    </HtmlTooltip>
                </TableCell>
                <TableCell>{type} </TableCell>
                <TableCell>{status}</TableCell>
                <TableCell>{priceModel}</TableCell>
                <TableCell>{availabilityZone}</TableCell>
                <TableCell align="center"><strong>{onDemandCostHr}</strong></TableCell>
                <TableCell><strong>{RICostHr}</strong></TableCell>
                <TableCell align="center"><strong>{usageHrs}</strong></TableCell>
                <TableCell align="center">{addOns}</TableCell>
                <TableCell align="center"><strong>{totalSpend}</strong></TableCell>
              </TableRow>
            );
          })
        ) : (
          <Box className="d-blck text-center w-100 h-100 ">
            <Box className="environment-loader  align-item-center justify-center p-t-20 p-b-20 ">
              <h5 className="m-t-0 m-b-0">There are no data available.</h5>
            </Box>
          </Box>
        )}
      </TableBody>
    );
  };

  render() {
    return <Box className="new-reports-table">{this.renderTable()}</Box>;
  }
}

export default SpendingTable;
