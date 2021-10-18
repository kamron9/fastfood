import React from "react";
import lavash from "../../../assets/images/productImg/lavash.png";
import { Container, Icon, Text, Wrapper } from "./style";

const Body = () => {
  return (
    <Container>
      <Wrapper>
        <Icon src={lavash} />
        Lavash Mini
      </Wrapper>
      <Wrapper>Lavash</Wrapper>
      <Wrapper>
        <Text>18,000 UZS</Text>
      </Wrapper>
      <Wrapper>
        <Text>Fri, salat ....</Text>
      </Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Body;