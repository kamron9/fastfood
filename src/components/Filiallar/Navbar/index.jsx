import React from "react";
import {
  Container,
  Input,
  InputWrapper,
  Plus,
  Search,
  Text,
  Wrapper,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper right>
        <Plus />
        <Text>Yangi filial qo'shish</Text>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          <Input placeholder="Qidirish" />
          <Search />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
