import React from "react";
import yoda from "../../images/yoda.jpeg";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        name: "Dmitry K.",
        photo: yoda,
        location: { country: "Belarus,", city: "Minsk" },
        status: "I am looking for a Job right now...",
      },
      {
        id: 2,
        followed: true,
        name: "Svetlana D.",
        photo: yoda,
        location: { country: "Belarus,", city: "Minsk" },
        status: "I am so pretty",
      },
      {
        id: 3,
        followed: true,
        name: "Sergey S.",
        photo: yoda,
        location: { country: "Ukraine,", city: "Kiev" },
        status: "I like football!!!",
      },
      {
        id: 4,
        followed: true,
        name: "Andrew T.",
        photo: yoda,
        location: { country: "United States,", city: " Philadelphia" },
        status: "I am free to help you to create good Video Production",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div className={s.users} key={u.id}>
          <div className={s.userPage}>
            <img src={u.photo} />
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
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
              <div className={s.country}>{u.location.country}</div>
              <div className={s.city}>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
