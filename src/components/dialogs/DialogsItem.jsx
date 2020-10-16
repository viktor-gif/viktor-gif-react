import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <NavLink to={path} activeClassName={s.active}>
      <div className={s.item}>
        <img className={s.dialogsPhoto} src={props.photo} />
        {props.name}
      </div>
    </NavLink>
  );
};

export default DialogsItem;
