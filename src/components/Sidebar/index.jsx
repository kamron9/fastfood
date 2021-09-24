import React from "react";
import {
  Container,
  Item,
  Logo,
  LogoTitle,
  LogoWrapper,
  Title,
  TitleDesc,
  Wrapper,
  Link,
  IconWrapper,
  activeStyle,
} from "./style";
import logoImg from "../../assets/images/logo.png";
import { sidebarData } from "../../utils/sidebar";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

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
      <Wrapper>
        {sidebarData.map(({ id, path, title, Icon }) => {
          return (
            <Item key={id}>
              <Link exact activeStyle={activeStyle} to={path}>
                <Icon className="icon" />
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
      <Wrapper row>
        <IconWrapper>
          <Logout />
        </IconWrapper>
        <IconWrapper.Title>Chiqish</IconWrapper.Title>
      </Wrapper>
    </Container>
  );
};
export default Sidebar;
