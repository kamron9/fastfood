import React from "react";
import Cancel from "../Generic/Cancel";
import Done from "../Generic/Done";
import {
  AddOrder,
  BottomLine,
  ClockWrapper,
  Container,
  Footer,
  IconWrapper,
  Info,
  Main,
  MainWrapper,
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
      <Main>
        <Wrapper center>
          <Info bottom>
            <Info.OrderID>{value.orderId}</Info.OrderID>
            <IconWrapper>
              <Info.Save />
            </IconWrapper>
          </Info>
          <BottomLine />
          <Info>
            <ClockWrapper>
              <Info.Clock />
              <Info.Time>{`${value.time.getHours()}:${value.time.getMinutes()}`}</Info.Time>
            </ClockWrapper>
          </Info>
        </Wrapper>
        <Wrapper flex>
          <Info>
            <Info.User />
            <Info.Name>{value.user.name}</Info.Name>
          </Info>
          <Info>
            <Info.CallIcon />
            <Info.Number>{value.user.number}</Info.Number>
          </Info>
        </Wrapper>
        <Wrapper flex>
          <MainWrapper top>
            <Info.ClipBoard /> <Info.ClipPrice>35,000UZS</Info.ClipPrice>{" "}
            <Info.PaymeIcon /> <Info.Payme>Payme</Info.Payme>
          </MainWrapper>
          <MainWrapper>
            <Info.Truck /> <Info.ClipPrice>5,000 UZS</Info.ClipPrice>
          </MainWrapper>
          <Info.TotalPrice top>Umumiy summa</Info.TotalPrice>
          <Footer>
            <Info.Price>{value.summa}</Info.Price>
            <Info.Name>&nbsp;UZS</Info.Name>
          </Footer>
        </Wrapper>
        <Wrapper flex last>
          <MainWrapper between>
            <div>
              <Info.Operator>Operator:</Info.Operator>
              <Info.OperatorName>{value.operator.name}</Info.OperatorName>
            </div>
            <div onClick={() => onCancel(value)}>
              <Cancel />
            </div>
          </MainWrapper>
          <MainWrapper between top>
            <div>
              <Info.Operator>Filallar:</Info.Operator>
              <Info.OperatorName>
                {value.filial.title} <br />
                {value.filial.location}
              </Info.OperatorName>
            </div>
            <div>
              <Done />
            </div>
          </MainWrapper>
        </Wrapper>
      </Main>
      <AddOrder>12345</AddOrder>
    </Container>
  );
};
export default ProductCardH;
