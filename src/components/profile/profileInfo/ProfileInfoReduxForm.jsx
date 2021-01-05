import React from "react";
import { Field, reduxForm } from "redux-form";
import { saveProfile } from "../../../redux/profile-reducer";
import { Input, Textarea } from "../../common/formControl/formControl";
import s from "./ProfileInfo.module.css";

const InfoTitleEdit = (props) => {
  let info = props.profileInfo;

  // const contacts = Object.keys(info.contacts).map((key) => {
  //   return <Contact key={key} contact={key} contactUrl={info.contacts[key]} />;
  // });

  return (
    <form onSubmit={props.handleSubmit}>
      <button>save</button>
      <br />
      {props.error && <div className={s.profileError}>{props.error}</div>}
      <div>
        <b>Full name</b>:{" "}
        <div>
          <Field
            name="fullName"
            component={Input}
            type="text"
            placeholder="Your name..."
          />
        </div>
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        <div>
          <Field name="lookingForAJob" component={Input} type="checkbox" />
        </div>
      </div>

      <div>
        <b>Looking for a job description</b>:{" "}
        <div>
          <Field
            name="lookingForAJobDescription"
            component={Textarea}
            placeholder="Looding for a job description"
            // validate={[required]}
          />
        </div>
      </div>

      <div>
        <b>About me</b>:{" "}
        <div>
          <Field
            name="aboutMe"
            component={Textarea}
            placeholder="About me"
            // validate={[required]}
          />
        </div>
      </div>

      <div>
        <b>contacts</b>:{" "}
        {Object.keys(props.info.contacts).map((key) => {
          return (
            <div className={s.contacts}>
              <b>{key}: </b>
              <Field
                name={"contacts." + key}
                component={Input}
                type="text"
                placeholder={key}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const InfoTitleEditReduxForm = reduxForm({
  form: "edit-profile",
})(InfoTitleEdit);

export default InfoTitleEditReduxForm;
