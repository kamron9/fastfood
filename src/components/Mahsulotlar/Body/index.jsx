import React from "react";
import lavash from "../../../assets/images/productImg/lavash.png";
import { Container, Icon, Text, Wrapper } from "./style";
import { product } from "../../../mock/products";
import { card } from "../../../mock/card";

const Body = () => {
  return (
    <Container>
      <Wrapper>
        {product.map((value) => {
          return (
            <Wrapper key={value.id}>
              {value.id}
              {/* <Icon src={value.icon} /> */}
            </Wrapper>
          );
        })}
      </Wrapper>
      <Wrapper>
        {/* {product.map((value) => (
          <Text>{value.mahsulot}</Text>
        ))} */}
      </Wrapper>
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
