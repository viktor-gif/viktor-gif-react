import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let withURLHeaderContainer = withRouter(HeaderContainer);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  logout,
})(withURLHeaderContainer);
