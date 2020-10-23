import React from "react";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

// const mapDispatchToProps = (dispatch) => {};

const MyPostsContainer = connect(mapStateToProps, null)(MyPosts);

export default MyPostsContainer;
