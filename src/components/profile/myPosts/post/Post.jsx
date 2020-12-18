import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  const deletePost = () => {
    props.deletePost(props.id);
  };
  return (
    <div className={s.post}>
      <img src="https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274" />
      <span>{props.message}</span>
      <span className={s.like}>
        like<span>{props.likesCount}</span>
      </span>
      <button onClick={deletePost}>delete</button>
    </div>
  );
};

export default Post;
