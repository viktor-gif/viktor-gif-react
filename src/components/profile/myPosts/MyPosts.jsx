import React from "react";
import { updateNewPostText } from "../../../redux/state";
import ProfileInfo from "../profileInfo/ProfileInfo";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let myPostsItems = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.post} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.content}>
      <ProfileInfo
        addPost={props.addPost}
        newPostText={props.newPostText}
        updatePostText={props.updatePostText}
      />
      <div className={s.myPosts}>
        My posts
        {myPostsItems}
      </div>
    </div>
  );
};

export default MyPosts;
