import React from "react";
import { Container, Wrapper } from "./style";

const Action = () => {
  return (
    <Container>
      <Wrapper left none>
        Filial nomi
      </Wrapper>
      <Wrapper left> Mo'ljal</Wrapper>
      <Wrapper>Ish vaqti</Wrapper>
      {/* <Wrapper>qo'shimcha</Wrapper> */}
      <Wrapper>Action</Wrapper>
    </Container>
  );
};

export default Action;
