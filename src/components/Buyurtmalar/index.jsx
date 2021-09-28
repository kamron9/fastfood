import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import { Container } from "./style";

const Buyurtmalar = ({ location }) => {
  return (
    <Container className="body">
      <Navbar />
      <Body />
    </Container>
  );
};
export default Buyurtmalar;
