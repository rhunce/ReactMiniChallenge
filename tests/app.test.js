import React from "react";
import ReactDOM from "react-dom";
import { App } from "../src/App.jsx";

test("renders the correct content", () => {
  // render a React component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(app.querySelector("h1").textContent).toBe("Hello World!");
});
