import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { setAuthUserData } from "../../redux/auth-reducer";
import { compose } from "redux";
import WithAuthRedirect from "../common/hoc/WithAuthRedirect";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    valuesForm: state.form.value,
  };
};

export default compose(
  connect(mapStateToProps, { setAuthUserData })
  // WithAuthRedirect
)(LoginContainer);
