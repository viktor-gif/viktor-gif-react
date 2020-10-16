import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
  let friendsItems = props.friends.map((f) => {
    return (
      <Friend
        id={f.id}
        key={f.id}
        name={f.name.length <= 5 ? f.name : f.name.slice(0, 4) + "..."}
        image={f.image}
      />
    );
  });
  return (
    <div className={s.friendsContainer}>
      <h3>My friends</h3>
      <div className={s.myFriends}>
        <a href="#">25 friends</a>
        <a href="#">To find friends</a>
      </div>
      <div className={s.friendsItems}>{friendsItems}</div>
    </div>
  );
};

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img className={s.friendImage} src={props.image} />
      <div className={s.name}>{props.name}</div>
    </div>
  );
};

export default Friends;
