import React from "react";
import {
  Container,
  Logo,
  LogoTitle,
  LogoWrapper,
  Title,
  TitleDesc,
} from "./style";
import logoImg from "../../assets/images/logo.png";

export const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logoImg} />
        <LogoTitle>
          <Title>Fast Food</Title>
          <TitleDesc>Online maxsulot sotuvi</TitleDesc>
        </LogoTitle>
      </LogoWrapper>
    </Container>
  );
};
export default Sidebar;
