import React from "react";
import MenuH from "../menuH";
import MenuV from "../menuV";

export const Body = (props) => {
  console.log(props, "props");
  return props.active ? <MenuV /> : <MenuH />;
};
export default Body;
