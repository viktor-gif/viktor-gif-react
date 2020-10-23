import React from "react";
import { addPostAC, updatePostTextAC } from "../../../redux/profile-reducer";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let textValue = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = textValue.current.value;
    props.onPostChange(text);
  };

  return (
    <div>
      <div className={s.mainPhoto}></div>
      <div className={s.info}>
        <div>ava + description</div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={textValue}
          placeholder="Add your text..."
        ></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
