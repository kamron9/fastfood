import React from "react";
import { Container, Wrapper } from "./style";

const Action = () => {
  return (
    <Container>
      <Wrapper left none>
        Kategoriya Uz
      </Wrapper>
      <Wrapper left>Kategoriya Uz</Wrapper>
      <Wrapper>Bosh kategoriiya</Wrapper>
      {/* <Wrapper>qo'shimcha</Wrapper> */}
      <Wrapper>Action</Wrapper>
    </Container>
  );
};

export default Action;
