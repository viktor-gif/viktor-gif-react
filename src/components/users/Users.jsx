import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../images/dart.png";
import s from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={
                props.currentPage === p ? s.currentPage : s.notCurrentPage
              }
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
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
