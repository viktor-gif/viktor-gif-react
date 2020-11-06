import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfilePage } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

      .then((response) => {
        this.props.setProfilePage(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profileInfo={this.props.profileInfo} />;
  }
}

const mapStateToProps = (state) => ({
  profileInfo: state.profilePage.profileInfo,
});

const withApiProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setProfilePage,
})(withApiProfileContainer);
