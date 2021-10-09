import React from "react";
import ProductCardH from "../../ProductCardH";
import { Container, Wrapper } from "./style";
import { BuyurtmaContext } from "../../../context/buyurtma";

export const Body = () => {
  const [card] = BuyurtmaContext();

  return (
    <Container>
      {/* <Wrapper> */}
      {card.yangi.map((value) => (
        <ProductCardH value={value} key={value.id} />
      ))}
      {/* </Wrapper> */}
    </Container>
  );
};
export default Body;
