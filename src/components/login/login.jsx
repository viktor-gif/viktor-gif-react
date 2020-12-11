import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formControl/formControl";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component={Input}
          type="email"
          placeholder="Email..."
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="Password..."
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const loginSubmit = (valuesForm) => {
    props.login(valuesForm.email, valuesForm.password, valuesForm.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={loginSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login, logout })(Login);
