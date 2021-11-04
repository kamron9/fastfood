import React from "react";
import Filter from "../../Generic/Filter";
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
        <Text>Yangi mahsulot qo'shish</Text>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          <Input placeholder="Qidirish" />
          <Search />
        </InputWrapper>
        <Filter />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
