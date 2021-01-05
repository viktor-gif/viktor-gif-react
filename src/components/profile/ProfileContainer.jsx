import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getUserPage,
  getStatus,
  updateStatus,
  changePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import WithAuthRedirect from "../common/hoc/WithAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 11121;
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserPage(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        {/* {this.props.isFetching && <Preloader />} */}

        <Profile
          isOwner={!this.props.match.params.userId}
          profileInfo={this.props.profileInfo}
          isFetching={this.props.isFetching}
          status={this.props.status}
          authorizedUserId={this.props.authorizedUserId}
          changePhoto={this.props.changePhoto}
          updateStatus={this.props.updateStatus}
          saveProfile={this.props.saveProfile}
        />
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
  connect(mapStateToProps, {
    getUserPage,
    getStatus,
    updateStatus,
    changePhoto,
    saveProfile,
  }),
  // WithAuthRedirect,
  withRouter
)(ProfileContainer);
