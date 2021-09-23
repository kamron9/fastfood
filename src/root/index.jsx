import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container } from "./style";
import { BrowserRouter as Router } from "react-router-dom";

export const Root = () => {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Navbar />
      </Router>
    </Container>
  );
};
export default Root;
