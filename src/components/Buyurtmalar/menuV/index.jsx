import React from "react";
import ProductCard from "../../ProductCardV";
import { Container, Wrapper } from "./style";
import { BuyurtmaContext } from "../../../context/buyurtma";

export const Body = () => {
  const [card] = BuyurtmaContext();
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
    </Container>
  );
};
export default Body;
