import React from "react";
import { Field, reduxForm } from "redux-form";
import { minLengthCreator, required } from "../utils/validators/validators";
import { FormControl } from "../common/formControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";

const minLength5 = minLengthCreator(5);

const Input = FormControl("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="E-mail..."
          name="email"
          component={Input}
          type="email"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password..."
          name="password"
          component={Input}
          type="password"
          validate={[required, minLength5]}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      {props.error && <div className={s.errorForm}>{props.error}</div>}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

let LoginReduxForm = (props) => {
  const { handleSubmit } = props;
  return <LoginForm onSubmit={handleSubmit} {...props} />;
};

LoginReduxForm = reduxForm({
  form: "login",
})(LoginReduxForm);

// the second way (shorter)
// const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const submit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
  };
  {
    if (props.isAuth) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={submit} {...props} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
