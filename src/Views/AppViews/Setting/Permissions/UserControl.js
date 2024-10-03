import React, { Component } from "react";
import {
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  TablePagination,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateUserControlModal from "./Components/CreateUserControlModal";
import CreateNewUserRequestControlModal from "./Components/CreateNewUserRequestControlModal";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { connect } from "react-redux";
import status from "Redux/Constants/CommonDS";
import Loader from "Components/Loader";
// import { v4 } from "uuid";
import ConfirmationPopup from "Components/ConfirmationPopup";
import { getFormattedDate, getCurrentUser } from "Utils";
import {
  deleteUser,
  getUserPermissionData,
  getPendingUserCount,
} from "Redux/Settings/SettingsThunk";
import { ToastMessage } from "Toast/ToastMessage";
import { APP_PREFIX_PATH } from "Configs/AppConfig";
import { API_ERROR_MESSAGE, NO_DATA_FOUND } from "CommonData";

class UserControl extends Component {
  user = { id: "", username: "", organization: {} };
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      pg: 0,
      rpg: 10,
      showCreateUserControlModal: false,
      showCreateNewUserRequestControlModal: false,
      actionButton: null,
      searchedKey: "",
      pendingUsersCount: 0,
    };
    let userDetails = getCurrentUser()?.info?.user;
    if (userDetails) {
      this.user = userDetails;
    }
  }

  componentDidMount = () => {
    this.setUsersStateOrReturnData();
    const orgId = this.user.organization?.id;
    if (orgId) {
      this.props.getPendingUserCount(orgId);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.userPermissionData?.status !==
      prevProps.userPermissionData?.status
    ) {
      if (this.props.userPermissionData.status === status.SUCCESS) {
        this.setUsersStateOrReturnData();
      }
    }

    if (this.props.removeUser.status !== prevProps.removeUser.status) {
      if (this.props.removeUser.status === status.SUCCESS) {
        let removeUserRes = this.props.removeUser.data;
        if (removeUserRes) {
          this.togglePopup();
          this.props.getUserPermissionData(this.user.username);
          ToastMessage.success("User Disabled Successfully");
        } else {
          ToastMessage.error("User Disabled action Failed!");
        }
      }
    }

    if (
      this.props.pendingUserCount.status !== prevProps.pendingUserCount.status
    ) {
      if (this.props.pendingUserCount.status === status.SUCCESS) {
        if (this.props.pendingUserCount?.data) {
          let pendingUsersCount =
            this.props.pendingUserCount?.data?.pendingUsersCount || "0";

          this.setState({ pendingUsersCount });
        }
      }
    }
  };

  handleChangePage = (event, newpage) => {
    this.setState({ pg: newpage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rpg: parseInt(event.target.value, 10),
      pg: 0,
    });
  };

  handleCreateUserControlModal = () => {
    this.setState({
      showCreateUserControlModal: !this.state.showCreateUserControlModal,
    });
  };

  handleCreateNewUserRequestControlModal = () => {
    this.setState({
      showCreateNewUserRequestControlModal:
        !this.state.showCreateNewUserRequestControlModal,
    });
  };

  handleActionButton = (index, anchorEl) => {
    this.setState({
      actionButton: index,
      anchorEl,
    });
  };

  //  Serach Users
  handleSearchChange = (e) => {
    let value = e.target.value;
    let { rows } = this.state;
    let users = this.props.userPermissionData.data?.users || [];
    if (value) {
      rows = users.filter((userData) => {
        if (
          userData?.username?.toLowerCase().includes(value.toLowerCase()) ||
          userData?.email?.toLowerCase().includes(value.toLowerCase())
        ) {
          return userData;
        } else {
          return null;
        }
      });
    } else {
      rows = users;
    }

    this.setState({ rows, searchedKey: value });
  };

  // Render user search input and btn
  renderSearchInputAndBtn = () => {
    let { searchedKey, pendingUsersCount } = this.state;
    return (
      <Box className="d-flex width-100 search-box">
        <Box className="search">
          <input
            type="text"
            className="input"
            placeholder="Search User"
            value={searchedKey}
            onChange={this.handleSearchChange}
          />
          <button className="button">
            <SearchOutlinedIcon />
          </button>
        </Box>
        <Button
          className="primary-btn min-width  m-r-3"
          onClick={this.handleCreateUserControlModal}
        >
          Create User
        </Button>
        <Box className="d-inline-block new-user">
          <Button
            className="light-btn min-width"
            onClick={this.handleCreateNewUserRequestControlModal}
          >
            New User Request
          </Button>
          <span className="noti">{pendingUsersCount}</span>
        </Box>
      </Box>
    );
  };

  // Render header of table
  renderTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Email Address</TableCell>
          <TableCell>Login Details</TableCell>
          <TableCell align="center">Groups</TableCell>
          <TableCell align="center">Created Date</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  renderDropDownData = (userId) => {
    return [
      { label: " Disable User", icon: "fas fa-trash-alt" },
      { label: " Edit User", icon: "fas fa-edit" },
    ].map((data, index) => {
      return (
        <MenuItem
          key={index}
          onClick={() => {
            index === 0 ? (
              this.setState({
                showConfirmPopup: true,
                userId,
              })
            ) : (
              <></>
            );
            this.handleActionButton(null, null);
          }}
        >
          <i className={data.icon} />
          {data.label}
        </MenuItem>
      );
    });
  };

  // Render body of table
  renderTableBody = () => {
    const { rows, pg, rpg, actionButton } = this.state;
    return (
      <TableBody>
        {rows?.length ? (
          rows.slice(pg * rpg, pg * rpg + rpg).map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link to={`${APP_PREFIX_PATH}/setting/user-profile/${row.id}`}>
                  {row.username}
                </Link>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Box className="d-block">
                  {row.loginCount ? (
                    <strong>Count : {row.loginCount} </strong>
                  ) : (
                    "Never Login "
                  )}
                </Box>
                <Box className="d-block">
                  {row.lastLoginAt ? (
                    <strong>Last : {getFormattedDate(row.lastLoginAt)}</strong>
                  ) : (
                    ""
                  )}
                </Box>
              </TableCell>
              <TableCell align="center">{row.roles?.length}</TableCell>
              <TableCell align="center">
                {getFormattedDate(row.createdAt)}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  className="action-btn"
                  aria-label="morevertIcon"
                  size="small"
                  onClick={(e) =>
                    this.handleActionButton(row.id, e.currentTarget)
                  }
                >
                  <MoreVertIcon fontSize="small" />
                </IconButton>
                <Menu
                  className="common-list-menu"
                  id={`basic-menu-${row.id}`}
                  anchorEl={this.state.anchorEl}
                  open={actionButton === row.id}
                  onClose={() => this.handleActionButton(null, null)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  {this.renderDropDownData(row.id)}
                </Menu>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={12}>
              <Box className="d-blck text-center w-100 h-100 ">
                <Box className="environment-loader  align-item-center justify-center p-t-20 p-b-20 ">
                  <h5 className="m-t-0 m-b-0">
                    {this.props.userPermissionData.status === status.FAILURE
                      ? API_ERROR_MESSAGE
                      : NO_DATA_FOUND}
                  </h5>
                </Box>
              </Box>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    );
  };

  // Render table container
  renderTableContainer = () => {
    const { status: userStatus } = this.props.userPermissionData;

    if (userStatus === status.IN_PROGRESS) {
      return this.renderLoder();
    } else {
      return (
        <TableContainer component={Paper} className="access-control-table">
          <Table
            sx={{ minWidth: 1000 }}
            aria-label="custom pagination table"
            className="table"
          >
            {this.renderTableHead()}
            {this.renderTableBody()}
          </Table>
        </TableContainer>
      );
    }
  };

  // Render component of table pagination
  renderComponentTablePagination = () => {
    const { rows, pg, rpg } = this.state;
    return rows?.length ? (
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rpg}
        page={pg}
        className="access-control-pagination"
        onPageChange={this.handleChangePage}
        onRowsPerPageChange={this.handleChangeRowsPerPage}
      />
    ) : (
      <></>
    );
  };

  // Render component of Create User Modal
  renderComponentCreateUserModal = () => {
    const { showCreateUserControlModal } = this.state;
    return showCreateUserControlModal ? (
      <CreateUserControlModal
        showModal={showCreateUserControlModal}
        handleCreateUserControlModal={this.handleCreateUserControlModal}
      />
    ) : (
      <></>
    );
  };

  // Render component of Create New Use Request Modal
  renderComponentCreateNewUserRequestModal = () => {
    const { showCreateNewUserRequestControlModal } = this.state;
    return showCreateNewUserRequestControlModal ? (
      <CreateNewUserRequestControlModal
        showModal={showCreateNewUserRequestControlModal}
        handleCreateNewUserRequestControlModal={
          this.handleCreateNewUserRequestControlModal
        }
      />
    ) : (
      <></>
    );
  };

  // Render component of Create User Modal
  renderComponentConfirmationModal = () => {
    const { showConfirmPopup } = this.state;
    let userStatus = this.props.removeUser?.status === status.IN_PROGRESS;
    return showConfirmPopup ? (
      <ConfirmationPopup
        showModal={showConfirmPopup}
        togglePopup={this.togglePopup}
        labels={{
          btnYes: "Disable",
          header: "Do you want to disable this User ? ",
          btnNo: "Cancel",
        }}
        icon={<i className="fas fa-trash-alt"></i>}
        handleCallBack={this.handleDeleteUser}
        showLoader={userStatus}
      />
    ) : (
      <></>
    );
  };

  // Set state or return data
  setUsersStateOrReturnData = (isStateSet = 1) => {
    let rows = this.props?.userPermissionData.data?.users || [];
    if (isStateSet) {
      this.setState({ rows });
    } else {
      return rows;
    }
  };

  // Render Loder
  renderLoder() {
    return (
      <Box className="d-blck text-center w-100 h-100 ">
        <Loader className="align-item-center justify-center w-100 h-100 p-t-20 p-b-20" />
      </Box>
    );
  }

  // Delete user API
  handleDeleteUser = () => {
    this.props.deleteUser(this.state.userId);
  };

  // toggle confirmation popup
  togglePopup = () => {
    let { showConfirmPopup, userId } = this.state;
    this.setState({
      showConfirmPopup: !showConfirmPopup,
      userId: showConfirmPopup ? 0 : userId,
      actionButton: false,
    });
  };
  render() {
    return (
      <>
        {this.renderSearchInputAndBtn()}
        {this.renderTableContainer()}
        {this.renderComponentTablePagination()}
        {this.renderComponentCreateUserModal()}
        {this.renderComponentConfirmationModal()}
        {this.renderComponentCreateNewUserRequestModal()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { allUsers, userPermissionData, removeUser, pendingUserCount } =
    state.settings;
  return {
    allUsers,
    userPermissionData,
    removeUser,
    pendingUserCount,
  };
};

const mapDispatchToProps = {
  deleteUser,
  getUserPermissionData,
  getPendingUserCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserControl);
