import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: 100vh;
  padding: 28px 0 40px 0;
  background: white;
`;
export const LogoWrapper = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 64px;
`;
export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const LogoTitle = styled.div`
  margin-left: 20px;
`;
export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 18px;
  line-height: 19px;
  color: #2d3a45;
`;
export const TitleDesc = styled.div`
  font-size: 14px;
  line-height: 14px;
  margin-top: 4px;
  color: #2d3a45;
  opacity: 0.5;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? `row` : "column")};
  align-items: ${({ row }) => row && "center"};
  margin-top: ${({ row }) => row && `auto`};
  cursor: ${({ row }) => row && `pointer`};
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px 20px 0;
  height: 48px;
`;
export const Link = styled(NavLink)`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  border-radius: 0px 6px 6px 0px;
  .icon {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
    margin-left: 40px;
  }
  transition: all 0.2s;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 10px;
  background: #f6f6f6;
  border-radius: 6px;
  margin: 0 10px 0 40px;
`;
IconWrapper.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
  cursor: pointer;
`;
export const activeStyle = {
  color: `white`,
  background: `#FCB600`,
  padding: `10px 0`,
};
