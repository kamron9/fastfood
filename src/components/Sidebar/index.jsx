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
} from "./style";
import logoImg from "../../assets/images/logo.png";
import { sidebarData } from "../../utils/sidebar";

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
              <Link to={path}>
                <Icon className="icon" />
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Sidebar;
