import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getUserPage,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import WithAuthRedirect from "../common/hoc/WithAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 11121;
      userId = this.props.authorizedUserId;
    }
    console.log(this.props.authorizedUserId);
    this.props.getUserPage(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        {/* {this.props.isFetching && <Preloader />} */}

        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileInfo: state.profilePage.profileInfo,
  isFetching: state.profilePage.isFetching,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
});

export default compose(
  connect(mapStateToProps, { getUserPage, getStatus, updateStatus }),
  // WithAuthRedirect,
  withRouter
)(ProfileContainer);
