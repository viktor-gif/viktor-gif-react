import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// const WithAuthRedirect = (Component) => {
//   class RedirectComponent extends React.Component {
//     render() {
//       if (!this.props.isAuth) return <Redirect to="/login" />;
//       return <Component {...this.props} />;
//     }
//   }
//   return RedirectComponent;
// };

const WithAuthRedirect = (Component) => {
  const mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
  //   const AuthRedirect = RedirectComponent(Dialogs);
  const AuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return AuthRedirect;
};

export default WithAuthRedirect;
