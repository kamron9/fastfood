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

export const Navbar = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  return (
    <Container>
      <Wrapper cornerSize>
        <Plus />
        <Text>Yangi buyurtma qo'shish</Text>
      </Wrapper>
      <Wrapper>
        <Tab>
          <Tab.Item
            active={isActive === "Yangi"}
            onClick={() => setIsActive("Yangi")}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            active={isActive === "Qabul qilingan"}
            onClick={() => setIsActive("Qabul qilingan")}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            active={isActive === "Jonatilgan"}
            onClick={() => setIsActive("Jonatilgan")}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            active={isActive === "Yopilgan"}
            onClick={() => setIsActive("Yopilgan")}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper cornerSize>
        <Toggle>
          <IconWrapper
            active={isTabActive}
            onClick={() => setIsTabActive(true)}
          >
            <MenuV active={isTabActive} />
          </IconWrapper>
          <IconWrapper
            active={!isTabActive}
            onClick={() => setIsTabActive(false)}
          >
            <MenuH active={!isTabActive} />
          </IconWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
