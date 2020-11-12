import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserPage } from "../../redux/profile-reducer";
import WithAuthRedirect from "../common/hoc/WithAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11121;
    }
    this.props.getUserPage(userId);
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
});

export default compose(
  connect(mapStateToProps, { getUserPage }),
  // WithAuthRedirect,
  withRouter
)(ProfileContainer);
