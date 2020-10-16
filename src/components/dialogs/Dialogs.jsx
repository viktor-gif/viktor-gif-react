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
  let dialogsItems = props.dialogsData.map((d) => (
    <DialogsItem id={d.id} key={d.id} name={d.name} photo={d.photo} />
  ));

  let messagesItems = props.messagesData.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItems}</div>
      <div className={s.messages}>{messagesItems}</div>
    </div>
  );
};

export default Dialogs;
