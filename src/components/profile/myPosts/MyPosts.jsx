import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formControl/formControl";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let myPostsItems = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.post} likesCount={p.likesCount} />
  ));

  let addPost = (value) => {
    props.addPost(value.addNewPostText);
  };

  return (
    <div className={s.content}>
      <div className={s.myPosts}>
        <MyPostsReduxForm onSubmit={addPost} />
        My posts
        {myPostsItems}
      </div>
    </div>
  );
};

const maxLength20 = maxLengthCreator(20);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLength20]}
        component={Textarea}
        name="addNewPostText"
        placeholder="Add your text..."
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "addPostTextForm" })(MyPostsForm);

export default MyPosts;
