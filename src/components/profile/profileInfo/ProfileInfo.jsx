import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../images/yoda.jpeg";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }
  let info = props.profileInfo;
  return (
    <div>
      <div className={s.mainPhoto}></div>
      <div className={s.info}>
        {props.isFetching && <Preloader />}
        <img src={info.photos.large || userPhoto} />

        <div>{info.aboutMe}</div>
        <div>{info.fullName}</div>
        <div>{info.lookingForAJob}</div>
        <div>{info.lookingForAJobDescription}</div>
        <div>
          contacts:
          <div>{info.contacts.facebook}</div>
          <div>{info.contacts.website}</div>
          <div>{info.contacts.vk}</div>
          <div>{info.contacts.twitter}</div>
          <div>{info.contacts.instagram}</div>
          <div>{info.contacts.youtube}</div>
          <div>{info.contacts.github}</div>
          <div>{info.contacts.mainLink}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
