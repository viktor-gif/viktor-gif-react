import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/selectors/users-selectors";
// import WithAuthRedirect from "../common/hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize); //thunk
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize); //thunk
  };

  render() {
    return (
      <>
        {this.props.isFetching === true ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,

    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCount(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
}; */

export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, requestUsers })
  // WithAuthRedirect
)(UsersContainer);
