import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./friends/FriendsContainer";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dev" activeClassName={s.active}>
          Dev-page
        </NavLink>
      </div>
      <FriendsContainer friends={props.friends} />
    </nav>
  );
};

export default Navbar;
