import React from "react";
import ProductCard from "../../ProductCard";
import { Container, Wrapper } from "./style";

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        <ProductCard />
      </Wrapper>
      <Wrapper>
        <ProductCard />
      </Wrapper>
      <Wrapper>
        <ProductCard />
      </Wrapper>
      <Wrapper>
        <ProductCard />
      </Wrapper>
    </Container>
  );
};
export default Body;
