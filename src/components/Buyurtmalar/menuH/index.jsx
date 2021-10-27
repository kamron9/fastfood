import React from "react";
import ProductCardH from "../../ProductCardH";
import { Container } from "./style";
import { BuyurtmaContext } from "../../../context/buyurtma";
import Fade from "react-reveal/Fade";

export const Body = () => {
  const [card] = BuyurtmaContext();

  return (
    <Container>
      <Fade top>
        {/* <Wrapper> */}
        {card.yangi.map((value) => (
          <ProductCardH value={value} key={value.id} />
        ))}
        {/* </Wrapper> */}
      </Fade>
    </Container>
  );
};
export default Body;
