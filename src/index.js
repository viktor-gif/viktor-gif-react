import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { subscribe } from "./redux/state";
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

let renderEntireTree = () => {
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

renderEntireTree();

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(state);
