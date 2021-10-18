import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 180px;
  background: #fff;
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
  font-size: 14px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
`;
export const Input = styled.input`
  width: 300px;
  height: 48px;
  font-size: 17px;
  padding-left: 15px;
  background: #edeff3;
  border-radius: 24px;
  border: none;
  outline: none;
`;
