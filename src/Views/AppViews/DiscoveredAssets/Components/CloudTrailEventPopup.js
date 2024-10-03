import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Box, IconButton } from "@mui/material";
// import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

class CloudTrailEventPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.props.togglePopup();
  };

  render() {
    let trialEvents = "";
    if (this.props.data) {
      try {
        trialEvents =   JSON.stringify(this.props.data ,null,2)        
      } catch (error) {
        console.error(error)
      }
    }
    return (
      <Modal
        isOpen={this.props.showModal}
        toggle={this.toggle}
        className="select-account-modal-container"
      >
        <ModalHeader className="m-b-1 border-bottom">
          {this.props.title || "Cloud Trail Event"}
          <IconButton
            variant="outlined"
            aria-label="delete"
            size="small"
            className="close-btn"
            onClick={() => {
              this.props.togglePopup();
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </ModalHeader>
        <ModalBody
          style={{ overflowY: "auto", overflowX: "auto", maxHeight: "300px" }}
        >
          <Box className="cloud-trail-event"><pre> {trialEvents}</pre></Box>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  // const {} = state.environments;
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CloudTrailEventPopup);
