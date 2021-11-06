import React from "react";
import Action from "./Action";
import Body from "./Body";
import Navbar from "./Navbar";
import { BodyWrapper, Container } from "./style";

const Mijozlar = () => {
  return (
    <Container>
      <Navbar />
      <Action />
      <BodyWrapper>
        <Body />
      </BodyWrapper>
    </Container>
  );
};

export default Mijozlar;
