import React from "react";
import Filter from "../../Generic/Filter";
import {
  Container,
  FilterTab,
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
        <Text>Malumotlarni yangilash</Text>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          <Input placeholder="Qidirish" />
          <Search />
        </InputWrapper>
        <Filter />
      </Wrapper>
      {/* <FilterTab></FilterTab> */}
    </Container>
  );
};

export default Navbar;
