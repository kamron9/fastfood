import React from "react";
import ReactDOM from "react-dom";
import { Maincontext } from "./context";
import "./index.css";
import LoginPage from "./page/Login";
import Root from "./root";

ReactDOM.render(
  <React.StrictMode>
    <Maincontext>
      {/* <LoginPage /> */}
      <Root />
    </Maincontext>
  </React.StrictMode>,
  document.getElementById("root")
);
