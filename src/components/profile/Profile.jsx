import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
      />
    </div>
  );
};

export default Profile;
