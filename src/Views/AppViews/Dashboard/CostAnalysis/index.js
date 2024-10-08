import React, { Component } from "react";
import { Box, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  getProductWiseCost,
  getProductionVsOther,
  getServiceTypeWiseCost,
} from "Redux/Dashboard/DashboardThunk";
import { connect } from "react-redux";
import status from "Redux/Constants/CommonDS";
import { v4 } from "uuid";
import Loader from "Components/Loader";
import CommonTooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { API_ERROR_MESSAGE, NO_DATA_FOUND } from "CommonData";
import ProductPrediction from "../charts/ProductPrediction";
import ProductionVsOthers from "../charts/ProductvsOthers";
import ServiceType from "../charts/ServiceType";
ChartJS.register(ArcElement, Tooltip, Legend);

const colorPallate = [
  "#8676FF",
  "#42CD7E",
  "#FF9066",
  "#FFCC41",
  "#F00808",
  "#046583",
  "#EE106D",
  "#A04D4D",
  "#0AE092",
  "#1e81b0",
  "#969606",
  "#e28743",
  "#eab676",
  "#101BBB",
  "#21130d",
  "#873e23",
  "#063970",
  "Orange",
  "Purple",
  "Pink",
  "Red",
  "Teal",
  "Green",
  "Blue",
  "Yellow",
  "Brown",
  "Grey",
];

const HtmlTooltip = styled(({ className, ...props }) => (
  <CommonTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#ffffffff",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffffff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 200,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
class CostAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productWiseCostData: [],
      productionVsOthersData: [],
      serviceTypeWiseCostData: [],
    };
  }

  componentDidMount = () => {
    this.props.getProductWiseCost();
    this.props.getProductionVsOther();
    this.props.getServiceTypeWiseCost();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.productWiseCost.status !== this.props.productWiseCost.status &&
      this.props.productWiseCost.status === status.SUCCESS
    ) {
      this.setState({ productWiseCostData: this.props.productWiseCost.data });
    }

    if (
      prevProps.productionVsOther.status !==
        this.props.productionVsOther.status &&
      this.props.productionVsOther.status === status.SUCCESS
    ) {
      this.setState({
        productionVsOthersData: this.props.productionVsOther.data,
      });
    }

    if (
      prevProps.serviceTypeWiseCost.status !==
        this.props.serviceTypeWiseCost.status &&
      this.props.serviceTypeWiseCost.status === status.SUCCESS
    ) {
      this.setState({
        serviceTypeWiseCostData: this.props.serviceTypeWiseCost.data,
      });
    }
  };

  /** Gets API data and returns Dough chart acceptable data
   * @param {array} data - API data.
   */
  manipulateDoughData = (data) => {
    let doughData = {
      datasets: [
        {
          data: [],
          backgroundColor: [],
        },
      ],
    };
    data?.length &&
      data.forEach((item, index) => {
        if (index !== data.length - 1) {
          let percentage = Number(item.percentage).toFixed(2);

          doughData.datasets[0].data.push(percentage);
          doughData.datasets[0].backgroundColor.push(colorPallate[index]);
        }
      });
    return doughData;
  };

  /** Gets API data and returns Bars JSX
   * @param {array} data - API data.
   */
  renderBarsData = (data) => {
    const JSX = [];
    data?.length &&
      data.forEach((item, index) => {
        if (index !== data.length - 1) {
          JSX.push(
            <ListItem key={v4()}>
              <HtmlTooltip className="table-tooltip" title={item.name}>
                <p>{item.name}</p>
              </HtmlTooltip>

              <Box className="d-block right-contant">
                <label>${item.total?.toLocaleString() || 0}</label>
                <span>
                  <span
                    style={{
                      width: `${item.percentage || 0}%`,
                      background: `${colorPallate[index]}`,
                    }}
                  ></span>
                </span>
              </Box>
            </ListItem>
          );
        }
      });

    return JSX;
  };

  appendTooltipPercentage = () => {
    return {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.raw + "%" || "";

              return label;
            },
          },
        },
      },
    };
  };
  // Render html when data is no available
  renderNoDataHtml = (text) => {
    return (
      <Box className="spend-loading">
        <h5 className="m-t-0 m-b-0">{text}</h5>
      </Box>
    );
  };
  render() {
    const {
      productWiseCostData,
      productionVsOthersData,
      serviceTypeWiseCostData,
    } = this.state;
    const { productWiseCost, productionVsOther, serviceTypeWiseCost } =
      this.props;
    return (
      <Box className="cost-analysis-container">
        <Box className="product-wise-inner-container">
          <Box className="main-collapse-expand">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                  
                           
                            <ProductPrediction/>
                      
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <ProductionVsOthers/>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>

                <ServiceType/>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const { productWiseCost, productionVsOther, serviceTypeWiseCost } =
    state.dashboard;
  return { productWiseCost, productionVsOther, serviceTypeWiseCost };
};

const mapDispatchToProps = {
  getProductWiseCost,
  getProductionVsOther,
  getServiceTypeWiseCost,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostAnalysis);
