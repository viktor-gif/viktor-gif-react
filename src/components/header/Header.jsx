import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.image}>
        <img src="https://www.rnz.co.nz/assets/galleries/18311/full_Klim_metal_1.jpg?1444358671" />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.loggedIn}>
            <div>{props.login}</div>
            <button onClick={props.logout}>Log out</button>
            <div className={s.sandwichBar}>
              <SandwichBar />
            </div>
          </div>
        ) : (
          <div className={s.loginButtons}>
            <button>
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className={s.signUpButton}>
              <a href="https://social-network.samuraijs.com/signUp">Sign up</a>
            </button>
            <div className={s.sandwichBar}>
              <SandwichBar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SandwichBar = (props) => {
  let [activeSandwich, setActiveSandwich] = useState(false);

  const toggleActiveSandwichBar = () => {
    if (activeSandwich) {
      setActiveSandwich(false);
    } else {
      setActiveSandwich(true);
    }
  };

  return (
    <div onClick={toggleActiveSandwichBar} className={s.sandwichBarContainer}>
      <div
        className={
          activeSandwich ? s.sandwichBarToDeactive : s.sandwichBarToActive
        }
      ></div>
      {activeSandwich && <NavBar />}
    </div>
  );
};

const NavBar = () => {
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
    </nav>
  );
};

export default Header;
