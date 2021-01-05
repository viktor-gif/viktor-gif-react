import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../images/yoda.jpeg";
import ProfileStatusWithHooks from "./profileStatusWithHooks";
import { useState } from "react";
import InfoTitleEditReduxForm from "./ProfileInfoReduxForm";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }
  let info = props.profileInfo;

  const onPhotoChange = (e) => {
    if (e.target.files.length) {
      props.changePhoto(e.target.files[0]);
    }
  };

  const contacts = Object.keys(info.contacts).map((key) => {
    return <Contact key={key} contact={key} contactUrl={info.contacts[key]} />;
  });

  return (
    <div>
      <div className={s.mainPhoto}></div>
      <div className={s.info}>
        <div className={s.mainImgContainer}>
          {props.isFetching && <Preloader />}
          <img src={info.photos.large || userPhoto} alt="My face" />
          {props.isOwner && (
            <input
              onChange={onPhotoChange}
              className={s.choosePhoto}
              type="file"
              // value="choose photo"
            />
          )}
        </div>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <EditInfoTitle
          contacts={contacts}
          info={info}
          saveProfile={props.saveProfile}
          profileInfo={props.profileInfo}
        />
      </div>
    </div>
  );
};

const EditInfoTitle = ({ contacts, info, saveProfile, profileInfo }) => {
  const [editMode, setEditMode] = useState(false);

  const profileSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      {!editMode && (
        <button
          onClick={() => {
            setEditMode(true);
          }}
        >
          edit
        </button>
      )}
      {editMode ? (
        <InfoTitleEditReduxForm
          initialValues={profileInfo}
          onSubmit={profileSubmit}
          contacts={contacts}
          info={info}
        />
      ) : (
        <InfoTitle info={info} contacts={contacts} />
      )}
    </div>
  );
};

const InfoTitle = ({ info, contacts }) => {
  return (
    <div>
      <div>
        <b>Full name</b>: {info.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {info.lookingForAJob ? "yes" : "no"}
      </div>
      {info.lookingForAJob && (
        <div>
          <b>Looking for a job description</b>: {info.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {info.aboutMe}
      </div>

      <div>
        <b>contacts</b>: {contacts}
      </div>
    </div>
  );
};

const Contact = (props) => {
  return (
    <div>
      <b>{props.contact}</b>: {props.contactUrl}
    </div>
  );
};

export default ProfileInfo;
