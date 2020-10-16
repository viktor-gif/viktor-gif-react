import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.mainPhoto}></div>
      <div className={s.info}>
        <div>ava + description</div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
