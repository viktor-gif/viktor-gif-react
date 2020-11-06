import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let myPostsItems = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.post} likesCount={p.likesCount} />
  ));

  let textValue = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = textValue.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.content}>
      <div className={s.myPosts}>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={textValue}
          placeholder="Add your text..."
        ></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        My posts
        {myPostsItems}
      </div>
    </div>
  );
};

export default MyPosts;
