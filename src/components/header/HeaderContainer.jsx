import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import { getAuthUserData } from "../../redux/auth-reducer";
import { withRouter } from "react-router-dom";
import { setProfilePage } from "../../redux/profile-reducer";
import { headerAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let withURLHeaderContainer = withRouter(HeaderContainer);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, setProfilePage })(
  withURLHeaderContainer
);
