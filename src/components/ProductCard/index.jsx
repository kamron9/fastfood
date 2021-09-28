import React from "react";
import Cancel from "../Generic/Cancel";
import Done from "../Generic/Done";
import { ClockWrapper, Container, IconWrapper, Info, Wrapper } from "./style";

export const ProductCard = () => {
  return (
    <Container>
      <Wrapper>
        <Info.OrderID>12345</Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <ClockWrapper>
          <Info.Clock />
          <Info.Time>00:36</Info.Time>
        </ClockWrapper>
      </Wrapper>
      <Wrapper flex top>
        <Info>
          <Info.User />
          <div>
            <Info.Name>Muhammad Jumayev</Info.Name>
            <Info.Number>(+99899)1234567</Info.Number>
          </div>
        </Info>
        <Info center>
          <div>
            <Info.TotalPrice top>Umumiy Summa</Info.TotalPrice>
            <Info.Price>40,000 UZS</Info.Price>
          </div>
          <Info end center>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper>
        <Done />
      </Wrapper>
    </Container>
  );
};
export default ProductCard;
