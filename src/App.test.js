import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import ViktorGifApp from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViktorGifApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
