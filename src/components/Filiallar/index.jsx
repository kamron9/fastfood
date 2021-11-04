import React from "react";
import { BodyWrapper, Container } from "./style";
import Navbar from "./Navbar";
import Action from "./Action";
import Body from "./Body";

const Filiallar = () => {
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

export default Filiallar;
