import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default Profile;
