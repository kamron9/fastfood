import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  padding: 28px 0 40px 0;
  border: 1px solid red;
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
  flex-direction: column;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px 20px 0;
  height: 48px;
  padding-left: 40px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  .icon {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
  }
`;
