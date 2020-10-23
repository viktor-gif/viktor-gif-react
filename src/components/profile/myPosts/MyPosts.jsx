import React from "react";
import ProfileInfoContainer from "../profileInfo/ProfileInfoContainer";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let myPostsItems = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.post} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.content}>
      <ProfileInfoContainer
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
      <div className={s.myPosts}>
        My posts
        {myPostsItems}
      </div>
    </div>
  );
};

export default MyPosts;
