import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import userPhoto from "../../images/yoda.jpeg";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.image}>
        <img src="https://www.rnz.co.nz/assets/galleries/18311/full_Klim_metal_1.jpg?1444358671" />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>{props.login}</div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
