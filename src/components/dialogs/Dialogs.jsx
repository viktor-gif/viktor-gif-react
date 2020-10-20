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
  let messageValue = React.createRef();

  let addMessage = () => {
    let text = props.dialogsPage.newMessageText;
    props.addMessage(text);
  };
  let onMessageChange = () => {
    let text = messageValue.current.value;
    props.updateMessageText(text);
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
            placeholder="Type your message..."
            ref={messageValue}
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
          ></textarea>
          <button onClick={addMessage}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
