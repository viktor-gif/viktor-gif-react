import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addMessage,
  addPost,
  updatePostText,
  updateMessageText,
} from "./redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updatePostText={updatePostText}
        addMessage={addMessage}
        updateMessageText={updateMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default renderEntireTree;
