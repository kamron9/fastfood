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
            <Numbers>{[...card.yangi].length}</Numbers>
          </Condition>
          {card.yangi.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
        <Wrapper>
          <Condition>
            <div>Qabul qilingan</div>
            <Numbers>{[...card.qabul].length}</Numbers>
          </Condition>
          {card.qabul.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
        <Wrapper>
          <Condition>
            <div>Jo'natilgan</div>
            <Numbers>{[...card.jonatilgan].length}</Numbers>
          </Condition>
          {card.jonatilgan.map((value) => (
            <ProductCard value={value} key={value.id} />
          ))}
        </Wrapper>
        <Wrapper>
          <Condition>
            <div>yopilgan</div>
            <Numbers>{[...card.yopilgan].length}</Numbers>
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
