import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formControl/formControl";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.loginForm}>
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
      {props.captchaUrl && (
        <div>
          <img src={props.captchaUrl} alt="captcha" />
          <div>
            <Field
              name="captcha"
              component={Input}
              placeholder="Type symbols from image"
              validate={[required]}
            />
          </div>
        </div>
      )}
      {props.error && <div className={s.loginError}>{props.error}</div>}
      <div className={s.loginButton}>
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
    props.login(
      valuesForm.email,
      valuesForm.password,
      valuesForm.rememberMe,
      valuesForm.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.loginContainer}>
      <h1>LOGIN</h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={loginSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login, logout })(Login);
