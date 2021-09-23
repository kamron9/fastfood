import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container } from "./style";

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar />
    </Container>
  );
};
export default Root;
