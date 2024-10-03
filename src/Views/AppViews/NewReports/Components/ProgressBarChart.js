import React, { Component } from "react";
import { Box, Grid, } from "@mui/material";
import ProgressChart from "./ProgressChart";

class ProgressBarChart extends Component {
  render() {
    return (
      <Box className="progress-cards">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box className="progress-card">
              <Box className="card-head">
                <Box className="d-inline-block">
                  <label className="d-block">R&D</label>
                  <span className="d-block">R&D Department</span>
                </Box>
                <Box className="d-flex align-items-center timing-content">
                  <i class="far fa-clock m-r-1"></i>
                  <p>20 days left </p>
                </Box>
              </Box>
              <Box className="card-content">
                <Box className="remaining-budget">
                  <Box className="d-flex">
                    <label>Remaining Budget &#58;</label> <span className="p-l-5">$0</span>
                  </Box>
                  <Box className="d-flex">
                    <label>Period &#58;</label> <span className="p-l-5">Quarterly</span>
                  </Box>
                </Box>
                <Box className="progress-top-content">
                  <label>Spendings $2500</label>
                  <label>Spendings $2500</label>
                </Box>
                <ProgressChart color={"#FF708B"} />
                <Box className="progress-bottom-content">
                  <span>
                    {" "}
                    <i class="fas fa-exclamation-triangle m-r-1"></i> $500
                    Unbudgeted spend detected
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box className="progress-card green-card">
              <Box className="card-head">
                <Box className="d-inline-block">
                  <label className="d-block">Cluster Budget</label>
                  <span className="d-block">Development Department</span>
                </Box>
                <Box className="d-flex align-items-center timing-content">
                  <i class="far fa-clock m-r-1"></i>
                  <p>20 days left </p>
                </Box>
              </Box>
              <Box className="card-content">
                <Box className="remaining-budget">
                  <Box className="d-flex">
                    <label>Remaining Budget &#58; </label> <span className="p-l-5">$0</span>
                  </Box>
                  <Box className="d-flex">
                    <label>Period &#58; </label> <span className="p-l-5">Quarterly</span>
                  </Box>
                </Box>
                <Box className="progress-top-content">
                  <label>Spendings $2500</label>
                  <label>Spendings $2500</label>
                </Box>
                <ProgressChart color={"#53CA43"} />
                <Box className="progress-bottom-content">
                  <span>
                    {" "}
                    <i class="fas fa-exclamation-triangle m-r-1"></i> $500
                    Unbudgeted spend detected
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box className="progress-card">
              <Box className="card-head">
                <Box className="d-inline-block">
                  <label className="d-block">Production Budget</label>
                  <span className="d-block">Operations Budget</span>
                </Box>
                <Box className="d-flex align-items-center timing-content">
                  <i class="far fa-clock m-r-1"></i>
                  <p>20 days left </p>
                </Box>
              </Box>
              <Box className="card-content">
                <Box className="remaining-budget">
                  <Box className="d-flex">
                    <label>Remaining Budget &#58; </label> <span className="p-l-5">$0</span>
                  </Box>
                  <Box className="d-flex">
                    <label>Period &#58; </label> <span className="p-l-5">Quarterly</span>
                  </Box>
                </Box>
                <Box className="progress-top-content">
                  <label>Spendings $2500</label>
                  <label>Spendings $2500</label>
                </Box>
                <ProgressChart color={"#FF708B"} />
                <Box className="progress-bottom-content">
                  <span>
                    {" "}
                    <i class="fas fa-exclamation-triangle m-r-1"></i> $500
                    Unbudgeted spend detected
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default ProgressBarChart;
