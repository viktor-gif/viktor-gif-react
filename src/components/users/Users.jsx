import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../images/dart.png";
import s from "./Users.module.css";
import Preloader from "../common/preloader/Preloader";
import Paginator from "../common/paginator/Paginator";

const Users = (props) => {
  return (
    <div>
      <Paginator {...props} />
      {props.users.map((u) => (
        <div className={s.users} key={u.id}>
          <div className={s.userPage}>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} />
            </NavLink>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id); //thunk
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id); //thunk
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={s.data}>
            <div className={s.nameStatus}>
              <div>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.location}>
              <div className={s.country}>{"u.location.country"}</div>
              <div className={s.city}>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
