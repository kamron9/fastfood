import React from "react";
import { Container, Input, Plus, Text, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper cornerSize>
        <Plus />
        <Text>Yangi mahsulot qo'shish</Text>
      </Wrapper>
      <Wrapper>
        <Input placeholder="Qidirish" />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
