import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as menuH } from "../../../assets/icons/menuH.svg";
import { ReactComponent as menuV } from "../../../assets/icons/menuV.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #000;
  width: ${({ cornerSize }) => (cornerSize ? `300px` : `100%`)};
  border: 2px solid #e5e5e5;
  padding: 22px 40px;
  background: #fff;
`;
export const Plus = styled(plus)`
  padding: 11px;
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;
  background: #20d472;
  border-radius: 50%;
  cursor: pointer;
`;
export const Text = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
`;
export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 6px;
  height: 50px;
  background: #edeff3;
  border-radius: 24px;
`;
Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  width: 170px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ active }) => (active ? `black` : " #9c9fa2")};
  background: ${({ active }) => active && "white"};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  height: 36px;
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 50px;
  background: #edeff3;
  border-radius: 24px;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) => (active ? "white" : "transparent")};
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;

export const MenuH = styled(menuH)`
  width: 14px;
  height: 14px;
  fill: ${({ active }) => (active ? "#8D9BA8;" : "transparent")};
`;
export const MenuV = styled(menuV)`
  width: 14px;
  height: 14px;
  fill: ${({ active }) => (active ? "#8D9BA8;" : "transparent")};
`;
