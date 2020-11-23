import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import { FormControl } from "../../common/formControls/FormControls";

const MyPosts = (props) => {
  let myPostsItems = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.post} likesCount={p.likesCount} />
  ));

  let addPostText = (event) => {
    props.addPost(event.newPostText);
  };

  return (
    <div className={s.content}>
      <MyPostsReduxForm onSubmit={addPostText} />
      <div>
        My posts
        {myPostsItems}
      </div>
    </div>
  );
};

const maxLength20 = maxLengthCreator(20);

const Textarea = FormControl("textarea");

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.myPosts}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Add your text..."
        validate={[required, maxLength20]}
      ></Field>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "addPostForm" })(MyPostsForm);

export default MyPosts;
