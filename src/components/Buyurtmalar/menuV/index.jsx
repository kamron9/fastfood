import React from "react";
import ProductCard from "../../ProductCardV";
import { Condition, Container, Numbers, Wrapper } from "./style";
import { BuyurtmaContext } from "../../../context/buyurtma";

export const Body = () => {
  const [card] = BuyurtmaContext();
  return (
    <>
      <Container>
        <Wrapper>
          <Condition>
            <div>Yangi:</div>
            <Numbers>4</Numbers>
          </Condition>
          {card.yangi.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
        <Wrapper>
          <Condition>
            <div>Qabul qilingan</div>
            <Numbers>4</Numbers>
          </Condition>
          {card.qabul.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
        <Wrapper>
          <Condition>
            <div>Jo'natilgan</div>
            <Numbers>4</Numbers>
          </Condition>
          {card.jonatilgan.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
        <Wrapper>
          <Condition>
            <div>yopilgan</div>
            <Numbers>4</Numbers>
          </Condition>
          {card.yopilgan.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};
export default Body;
