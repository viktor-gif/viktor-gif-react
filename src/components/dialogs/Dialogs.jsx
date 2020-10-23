import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

const Dialogs = (props) => {
  let addMessage = () => {
    props.addMessage();
  };
  let onMessageChange = (e) => {
    let body = e.target.value;
    props.onMessageChange(body);
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
        <div className={s.formMessage}>
          <textarea
            placeholder="Enter your message..."
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={addMessage}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
