import React, { useState } from "react";
import { Container, Icon, IconWrapper, Text, Wrapper } from "./style";
import { product } from "../../../mock/products";
import Edit from "../../Generic/Edit";
import Delete from "../../Generic/Delete";
import Fade from "react-reveal/Fade";

const Body = () => {
  const onDelete = (id) => {
    let filtered = product.filter((value) => value.id !== id);
    let newData = { ...product, filtered };
    console.log(filtered, "filtered");
    console.log(newData);
  };
  return (
    <Container>
      <Fade top>
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
                <div onClick={() => onDelete(id)}>
                  <Delete />
                </div>
              </IconWrapper>
            </Wrapper>
          );
        })}
      </Fade>
    </Container>
  );
};

export default Body;
