import React from "react";
import Cancel from "../Generic/Cancel";
import Done from "../Generic/Done";
import {
  BottomLine,
  ClockWrapper,
  Container,
  Footer,
  IconWrapper,
  Info,
  Wrapper,
} from "./style";
import { BuyurtmaContext } from "../../context/buyurtma";

export const ProductCardH = ({ value }) => {
  const [card, setBuyurtmaData] = BuyurtmaContext();

  const onCancel = (value) => {
    let filtered = card[value.category].filter((data) => data.id !== value.id);
    let newData = { ...card, [value.category]: filtered };
    setBuyurtmaData(newData);
  };
  return (
    <Container>
      <Wrapper center>
        <Info bottom>
          <Info.OrderID>12345</Info.OrderID>
          <IconWrapper>
            <Info.Save />
          </IconWrapper>
        </Info>
        <BottomLine />
        <Info>
          <ClockWrapper>
            <Info.Clock />
            <Info.Time>15:00</Info.Time>
          </ClockWrapper>
        </Info>
      </Wrapper>
      <Wrapper flex>
        <Info>
          <Info.User />
          <Info.Name>Muhammad Jumayev</Info.Name>
        </Info>
        <Info>
          <Info.CallIcon />
          <Info.Number>123456789</Info.Number>
        </Info>
      </Wrapper>
      <Wrapper flex></Wrapper>
      <Wrapper last>4</Wrapper>
    </Container>
  );
};
export default ProductCardH;
