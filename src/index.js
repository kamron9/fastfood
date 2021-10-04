import React from "react";
import ReactDOM from "react-dom";
import { Maincontext } from "./context";
import "./index.css";
import Root from "./root";

ReactDOM.render(
  <React.StrictMode>
    <Maincontext>
      <Root />
    </Maincontext>
  </React.StrictMode>,
  document.getElementById("root")
);
