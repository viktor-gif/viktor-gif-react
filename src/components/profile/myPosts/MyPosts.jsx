import React from "react";
import ProfileInfo from "../profileInfo/ProfileInfo";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let myPostsItems = props.postsData.map((p) => (
    <Post id={p.id} key={p.id} message={p.post} likesKount={p.likesKount} />
  ));

  return (
    <div className={s.content}>
      <ProfileInfo />
      <div className={s.myPosts}>
        My posts
        {myPostsItems}
      </div>
    </div>
  );
};

export default MyPosts;
