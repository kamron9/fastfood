import React from "react";
import Cancel from "../Generic/Cancel";
import Done from "../Generic/Done";
import {
  ClockWrapper,
  Container,
  Footer,
  IconWrapper,
  Info,
  Wrapper,
} from "./style";
import { BuyurtmaContext } from "../../context/buyurtma";

export const ProductCard = ({ value }) => {
  const [card, setBuyurtmaData] = BuyurtmaContext();

  const onCancel = (value) => {
    let filtered = card[value.category].filter((data) => data.id !== value.id);
    let newData = { ...card, [value.category]: filtered };
    setBuyurtmaData(newData);
  };
  return (
    <Container>
      <Wrapper>

      </Wrapper>
    </Container>
  );
};
export default ProductCard;





        {/* <Info.OrderID>{value.orderId}</Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <ClockWrapper>
          <Info.Clock />
          <Info.Time>{`${value.time.getHours()}:${value.time.getMinutes()}`}</Info.Time>
        </ClockWrapper>
      </Wrapper>
      <Wrapper flex top>
        <Info>
          <Info.User />
          <div>
            <Info.Name>{value.user.name}</Info.Name>
            <Info.Number>{value.user.number}</Info.Number>
          </div>
        </Info>
        <Info center>
          <div>
            <Info.TotalPrice top>Umumiy Summa</Info.TotalPrice>
            <Info.Price>{value.summa} UZS</Info.Price>
          </div>
          <Info end={"true"} center>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper flex last>
        <Footer>
          <div>
            <Info.Operator>Operator:</Info.Operator>
            <Info.OperatorName>{value.operator.name}</Info.OperatorName>
          </div>
          <div onClick={() => onCancel(value)}>
            <Cancel />
          </div>
        </Footer>
        <Footer>
          <div>
            <Info.Operator>Filial:</Info.Operator>
            <Info.OperatorName>
              {value.filial.title} <br /> {value.filial.location}
            </Info.OperatorName>
          </div>
          <Done />
        </Footer> */}