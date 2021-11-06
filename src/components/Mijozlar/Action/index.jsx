import React from "react";
import { Container, Wrapper } from "./style";

const Action = () => {
  return (
    <Container>
      <Wrapper left none>
        Mijoz ismi
      </Wrapper>
      <Wrapper left>Telefon raqam</Wrapper>
      <Wrapper>buyurmalar soni</Wrapper>
      <Wrapper>status</Wrapper>
      <Wrapper>action</Wrapper>
    </Container>
  );
};

export default Action;
