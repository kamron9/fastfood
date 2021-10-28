import React from "react";
import ProductCard from "../../ProductCardV";
import Fade from "react-reveal/Fade";
import {
  Condition,
  Container,
  Numbers,
  Spot,
  Summa,
  SummaWrapper,
  Wrapper,
} from "./style";
import { BuyurtmaContext } from "../../../context/buyurtma";

export const Body = () => {
  const [card] = BuyurtmaContext();
  return (
    <>
      <Container>
        <Fade >
          <Wrapper>
            <Condition>
              <div>Yangi:</div>
              <Numbers>{[...card.yangi].length}</Numbers>
            </Condition>
            <SummaWrapper>
              <Spot />
              <Summa>12,300,000 UZS</Summa>
            </SummaWrapper>
            {card.yangi.map((value) => (
              <ProductCard value={value} key={value.id} />
            ))}
          </Wrapper>
          <Wrapper>
            <Condition>
              <div>Qabul qilingan</div>
              <Numbers>{[...card.qabul].length}</Numbers>
            </Condition>
            <SummaWrapper>
              <Spot type="blue" />
              <Summa>12,300,000 UZS</Summa>
            </SummaWrapper>
            {card.qabul.map((value) => (
              <ProductCard value={value} key={value.id} />
            ))}
          </Wrapper>
          <Wrapper>
            <Condition>
              <div>Jo'natilgan</div>
              <Numbers>{[...card.jonatilgan].length}</Numbers>
            </Condition>
            <SummaWrapper>
              <Spot type="brown" />
              <Summa>12,300,000 UZS</Summa>
            </SummaWrapper>
            {card.jonatilgan.map((value) => (
              <ProductCard value={value} key={value.id} />
            ))}
          </Wrapper>
          <Wrapper>
            <Condition>
              <div>yopilgan</div>
              <Numbers>{[...card.yopilgan].length}</Numbers>
            </Condition>
            <SummaWrapper>
              <Spot type="pink" />
              <Summa>12,300,000 UZS</Summa>
            </SummaWrapper>
            {card.yopilgan.map((value) => (
              <ProductCard value={value} key={value.id} />
            ))}
          </Wrapper>
        </Fade>
      </Container>
    </>
  );
};
export default Body;
