import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../common/formControls/FormControls";
import { maxLengthCreator, required } from "../utils/validators/validators";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

const Textarea = FormControl("textarea");

const Dialogs = (props) => {
  const addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
    console.log(values.newMessageBody);
  };

  let dialogsItems = props.dialogsPage.dialogs.map((d) => (
    <DialogsItem id={d.id} key={d.id} name={d.name} photo={d.photo} />
  ));

  let messagesItems = props.dialogsPage.messages.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItems}</div>
      <div className={s.messages}>
        {messagesItems}
        <DialogsReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(10); //this must be inside the component
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.formMessage}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message..."
        validate={[required, maxLength50]}
      ></Field>
      <button>send message</button>
    </form>
  );
};

const DialogsReduxForm = reduxForm({ form: "addMessageForm" })(DialogsForm);

export default Dialogs;
