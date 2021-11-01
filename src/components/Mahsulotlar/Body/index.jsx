import React from "react";
import { Container, Icon, IconWrapper, Text, Wrapper } from "./style";
import { product } from "../../../mock/products";
import Edit from "../../Generic/Edit";
import Delete from "../../Generic/Delete";

const Body = () => {
  return (
    <Container>
      {product.map(({ id, mahsulot, kategoriya, narxi, qoshimcha, icon }) => {
        return (
          <Wrapper key={id}>
            <IconWrapper>
              <Icon src={icon} />
              <div>{kategoriya}</div>
            </IconWrapper>
            <Text>{mahsulot}</Text>
            <Text>{narxi}</Text>
            <Text>{qoshimcha}</Text>
            <IconWrapper left>
              <Edit />
              <Delete />
            </IconWrapper>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default Body;
