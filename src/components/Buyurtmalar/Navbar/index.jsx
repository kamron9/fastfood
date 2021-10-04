import React, { useState } from "react";
import {
  Container,
  IconWrapper,
  MenuH,
  MenuV,
  Plus,
  Tab,
  Text,
  Toggle,
  Wrapper,
} from "./style";

export const Navbar = (props) => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  return (
    <Container>
      <Wrapper cornerSize>
        <Plus />
        <Text>Yangi buyurtma qo'shish</Text>
      </Wrapper>
      <Wrapper>
        <Tab active={isTabActive}>
          <Tab.Item
            active={isActive === "Yangi"}
            onClick={() => isTabActive && setIsActive("Yangi")}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            active={isActive === "Qabul qilingan"}
            onClick={() => isTabActive && setIsActive("Qabul qilingan")}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            active={isActive === "Jonatilgan"}
            onClick={() => isTabActive && setIsActive("Jonatilgan")}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            active={isActive === "Yopilgan"}
            onClick={() => isTabActive && setIsActive("Yopilgan")}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper cornerSize>
        <Toggle>
          <IconWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuV active={isTabActive} />
          </IconWrapper>
          <IconWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH active={!isTabActive} />
          </IconWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
