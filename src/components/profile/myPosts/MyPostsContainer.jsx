import React from "react";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addPost, deletePost } from "../../../redux/profile-reducer";

class MyPostsContainer extends React.Component {
  render() {
    return (
      <MyPosts
        posts={this.props.posts}
        newPostText={this.props.newPostText}
        addPost={this.props.addPost}
        deletePost={this.props.deletePost}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, { addPost, deletePost })(
  MyPostsContainer
);
