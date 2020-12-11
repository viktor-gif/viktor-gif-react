import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/formControl/formControl";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

const Dialogs = (props) => {
  let addMessage = (value) => {
    props.addMessage(value.addMessageField);
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
        <ReduxMessageForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.formMessage}>
      <Field
        validate={[required, maxLength10]}
        component={Textarea}
        name="addMessageField"
        placeholder="Enter your message..."
      ></Field>
      <button>send message</button>
    </form>
  );
};

const ReduxMessageForm = reduxForm({ form: "addMessageForm" })(MessageForm);

export default Dialogs;
