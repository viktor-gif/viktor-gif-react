import React from "react";
import { connect } from "react-redux";
import { addPostAC, updatePostTextAC } from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    onPostChange: (text) => {
      dispatch(updatePostTextAC(text));
    },
  };
};

const ProfileInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);

export default ProfileInfoContainer;
